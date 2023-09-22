import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contactsOperations } from 'redux/ContactsSlice';
import { selectError } from 'redux/ContactsSlice';
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
  const errorInfo = useSelector(selectError);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (errorInfo) {
      toast.error(<ToastText>{errorInfo}</ToastText>, {
        autoClose: 2000,
      });
    }
  }, [errorInfo]);

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
