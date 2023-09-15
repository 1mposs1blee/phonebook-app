import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/ContactsSlice';
import { ContactItem } from 'components/ContactItem';
import {
  ContactsList,
  MessageNotFound,
  MessageLoading,
} from './ContactList.styled';

export const ContactList = ({ isLoading }) => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return filteredContacts.length > 0 ? (
    <ContactsList>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ContactsList>
  ) : isLoading ? (
    <MessageLoading>Loading...</MessageLoading>
  ) : (
    <MessageNotFound>No contacts found</MessageNotFound>
  );
};

ContactList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
