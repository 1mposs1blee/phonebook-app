import { useState, useEffect, useMemo } from 'react';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import {
  Wrapper,
  MainTitle,
  ContactsTitle,
  MessageNotFound,
} from './App.styled';

const localStorageItemsName = {
  CONTACTS: 'contacts',
};

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem(localStorageItemsName.CONTACTS)) || []
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const stringifyContacts = JSON.stringify(contacts);

    localStorage.setItem(localStorageItemsName.CONTACTS, stringifyContacts);
  }, [contacts]);

  const onContactFormSubmit = contact => {
    const { name: newContactName } = contact;

    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === newContactName.toLowerCase()
      )
    ) {
      alert(`${newContactName} is already in contacts`);

      return;
    }

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const onChangeFilterInput = e => {
    const { value } = e.currentTarget;

    setFilter(value);
  };

  const onClickButtonDelete = id => {
    setContacts(prevContacts => {
      const contactsWithoutDeleted = prevContacts.filter(
        ({ id: contactId }) => contactId !== id
      );

      return [...contactsWithoutDeleted];
    });
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = useMemo(() => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, normalizedFilter]);

  return (
    <Wrapper>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onFormSubmit={onContactFormSubmit} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter onChangeFilterInput={onChangeFilterInput} filter={filter} />
      {filteredContacts.length > 0 ? (
        <ContactList
          onClickButtonDelete={onClickButtonDelete}
          contacts={filteredContacts}
        />
      ) : (
        <MessageNotFound>No contacts found</MessageNotFound>
      )}
    </Wrapper>
  );
};
