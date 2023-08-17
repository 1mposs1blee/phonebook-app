import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactsListItem,
  ButtonDeleteContact,
  ListItemWrapper,
} from './ContactList.styled';

export const ContactList = ({ contacts, onClickButtonDelete }) => {
  return (
    <ContactsList>
      {contacts.map(({ name, number, id }) => (
        <ContactsListItem key={id}>
          <ListItemWrapper>
            {name}: {number}
            <ButtonDeleteContact
              onClick={() => {
                onClickButtonDelete(id);
              }}
              type="button"
            >
              Delete
            </ButtonDeleteContact>
          </ListItemWrapper>
        </ContactsListItem>
      ))}
    </ContactsList>
  );
};

ContactList.propTypes = {
  onClickButtonDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};