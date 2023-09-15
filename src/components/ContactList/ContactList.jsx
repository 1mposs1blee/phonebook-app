import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsLoading } from 'redux/ContactsSlice';
import { ContactItem } from 'components/ContactItem';
import {
  ContactsList,
  MessageNotFound,
  MessageLoading,
} from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  if (filteredContacts.length > 0) {
    return (
      <ContactsList>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ContactsList>
    );
  }

  if (isLoading) {
    return <MessageLoading>Loading...</MessageLoading>;
  }

  return <MessageNotFound>No contacts found</MessageNotFound>;
};
