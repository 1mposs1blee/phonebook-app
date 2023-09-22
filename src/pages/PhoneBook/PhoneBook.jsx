import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contactsOperations } from 'redux/ContactsSlice';
import { selectError } from 'redux/ContactsSlice';
import { ContactList } from 'components/ContactList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { Wrapper, PhoneBookTitle, ContactsTitle } from './PhoneBook.styled';

const PhoneBook = () => {
  const dispatch = useDispatch();
  const errorInfo = useSelector(selectError);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  if (errorInfo) {
    toast.error(errorInfo, {
      autoClose: 2000,
    });
  }

  return (
    <Wrapper>
      <ToastContainer />
      <PhoneBookTitle>PhoneBook</PhoneBookTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};

export default PhoneBook;
