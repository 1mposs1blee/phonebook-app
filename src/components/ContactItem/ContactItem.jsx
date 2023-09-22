import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { contactsOperations } from 'redux/ContactsSlice';
import {
  ContactsListItem,
  ListItemText,
  ButtonDeleteContact,
  LineWrapper,
} from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const [contactIsLoading, setContactIsLoading] = useState(false);

  const dispatch = useDispatch();

  const { name, number, id } = contact;

  const handleClick = async () => {
    setContactIsLoading(true);

    await dispatch(contactsOperations.deleteContact(id));

    setContactIsLoading(false);
  };

  return (
    <>
      <ContactsListItem>
        <ListItemText>
          {name}: {number}
        </ListItemText>
        <ButtonDeleteContact
          disabled={contactIsLoading}
          onClick={handleClick}
          type="button"
        >
          {contactIsLoading ? 'Loading...' : 'Delete'}
        </ButtonDeleteContact>
      </ContactsListItem>
      <LineWrapper />
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
