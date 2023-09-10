import { useDispatch, useSelector } from 'react-redux';
import { getContacts, deleteContact } from 'redux/ContactsSlice';
import { getFilter } from 'redux/FilterSlice';
import { useMemo } from 'react';
import {
  ContactsList,
  ContactsListItem,
  ButtonDeleteContact,
  ListItemWrapper,
  MessageNotFound,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase().trim();
  const filteredContacts = useMemo(() => {
    return contacts.filter(({ name }) => name.includes(normalizedFilter));
  }, [contacts, normalizedFilter]);

  return filteredContacts.length > 0 ? (
    <ContactsList>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactsListItem key={id}>
          <ListItemWrapper>
            {name}: {number}
            <ButtonDeleteContact
              onClick={() => {
                dispatch(deleteContact(id));
              }}
              type="button"
            >
              Delete
            </ButtonDeleteContact>
          </ListItemWrapper>
        </ContactsListItem>
      ))}
    </ContactsList>
  ) : (
    <MessageNotFound>No contacts found</MessageNotFound>
  );
};
