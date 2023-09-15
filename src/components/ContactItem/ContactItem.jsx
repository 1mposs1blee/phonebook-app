import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { contactsOperations } from 'redux/ContactsSlice';
import {
  ContactsListItem,
  ListItemWrapper,
  ListItemText,
  ButtonDeleteContact,
} from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const [contactIsLoading, setContactIsLoading] = useState(false);

  const dispatch = useDispatch();

  const { name, phone, id } = contact;

  const handleClick = async () => {
    setContactIsLoading(true);

    await dispatch(contactsOperations.deleteContact(id));

    setContactIsLoading(false);
  };

  return (
    <ContactsListItem>
      <ListItemWrapper>
        <ListItemText>
          {name}: {phone}
        </ListItemText>
        <ButtonDeleteContact
          disabled={contactIsLoading}
          onClick={handleClick}
          type="button"
        >
          {contactIsLoading ? 'Loading...' : 'Delete'}
        </ButtonDeleteContact>
      </ListItemWrapper>
    </ContactsListItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
