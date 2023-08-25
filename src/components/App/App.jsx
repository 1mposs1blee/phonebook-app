import { useState, useEffect, useMemo, useRef } from 'react';
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
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const mounted = useRef(false);

  useEffect(() => {
    const parseContacts = JSON.parse(
      localStorage.getItem(localStorageItemsName.CONTACTS)
    );

    if (parseContacts) {
      setContacts(parseContacts);
    }
  }, []);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;

      return;
    }

    const stringifyContacts = JSON.stringify(contacts);

    localStorage.setItem(localStorageItemsName.CONTACTS, stringifyContacts);
  }, [contacts]);

  const onContactFormSubmit = contact => {
    const { name: newContactName } = contact;

    if (contacts.find(({ name }) => name === newContactName)) {
      alert(`${newContactName} is already in contacts`);

      return;
    }

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const onChangeFilterInput = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'filter':
        setFilter(value);
        break;
      default:
        break;
    }
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
