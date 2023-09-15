import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
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
    .required('Name is required.'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      "Phone number must be digits and can contain spaces, dashes, parentheses and can start with '+'."
    )
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
      toast.error(`${trimName} is already in contacts`);

      resetForm();

      setFormIsLoading(false);

      return;
    }

    await dispatch(
      contactsOperations.addContact({ name: trimName, phone: number })
    );

    resetForm();

    setFormIsLoading(false);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
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
