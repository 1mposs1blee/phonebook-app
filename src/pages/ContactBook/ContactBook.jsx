import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contactsOperations } from 'redux/ContactsSlice';
import { ContactList } from 'components/ContactList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import {
  Wrapper,
  PhoneBookTitle,
  ContactsTitle,
  ToastText,
} from './ContactBook.styled';

const ContactBook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
      .then(({ meta: { requestStatus }, payload }) => {
        if (requestStatus === 'rejected') throw new Error(payload);
      })
      .catch(({ message }) => {
        toast.error(<ToastText>{message}</ToastText>, {
          autoClose: 2000,
        });
      });
  }, [dispatch]);

  return (
    <Wrapper>
      <ToastContainer />
      <PhoneBookTitle>ContactBook</PhoneBookTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};

export default ContactBook;
