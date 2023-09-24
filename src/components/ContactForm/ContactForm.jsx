import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { selectContacts, contactsOperations } from 'redux/ContactsSlice';
import {
  ContactsForm,
  Label,
  Input,
  Button,
  ErrorText,
  ToastText,
} from './ContactForm.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
    )
    .max(25, 'Name must not exceed 25 characters.')
    .required('Name is required.'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      "Phone number must be digits and can contain spaces, dashes, parentheses and can start with '+'."
    )
    .max(25, 'Phone number must not exceed 25 characters.')
    .required('Phone number is required.'),
});

const initialValues = {
  name: '',
  number: '',
};
const nameInputId = nanoid();
const telInputId = nanoid();

export const ContactForm = () => {
  const [formIsLoading, setFormIsLoading] = useState(false);

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = async ({ name, number }, { resetForm }) => {
    setFormIsLoading(true);

    const trimName = name.trim();

    if (
      contacts.find(({ name }) => name.toLowerCase() === trimName.toLowerCase())
    ) {
      toast.error(<ToastText>{trimName} is already in contacts.</ToastText>, {
        autoClose: 2000,
      });

      resetForm();

      setFormIsLoading(false);

      return;
    }

    await dispatch(contactsOperations.addContact({ name: trimName, number }))
      .then(({ meta: { requestStatus }, payload }) => {
        if (requestStatus === 'rejected') throw new Error(payload);
      })
      .catch(({ message }) => {
        toast.error(<ToastText>{message}</ToastText>, {
          autoClose: 2000,
        });
      });

    resetForm();

    setFormIsLoading(false);
  };

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <ContactsForm>
          <Label htmlFor={nameInputId}>
            Name
            <Input type="text" id={nameInputId} name="name" required />
            <FormError name="name" />
          </Label>
          <Label htmlFor={telInputId}>
            Number
            <Input type="tel" id={telInputId} name="number" required />
            <FormError name="number" />
          </Label>
          <Button disabled={formIsLoading} type="submit">
            {formIsLoading ? 'Loading...' : 'Add contact'}
          </Button>
        </ContactsForm>
      </Formik>
    </>
  );
};
