import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { contactsOperations } from 'redux/ContactsSlice';
import { selectError, selectIsLoading } from 'redux/ContactsSlice';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Wrapper, MainTitle, ContactsTitle } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const errorInfo = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  if (errorInfo) {
    toast.error(errorInfo);
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Wrapper>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <ContactList isLoading={isLoading} />
      </Wrapper>
    </>
  );
};
