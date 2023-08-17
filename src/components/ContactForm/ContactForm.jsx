import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
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
      /^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
    )
    .required('Name is required.'),
  number: yup
    .string()
    .matches(
      /^[+]?[0-9\\.\\-\\s]{1,15}$/,
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

export const ContactForm = ({ onFormSubmit }) => {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    const trimName = name.trim();

    onFormSubmit({ name: trimName, number, id: nanoid() });

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <ContactsForm>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            type="text"
            id={nameInputId}
            name="name"
            required
          />
          <FormError name="name" />
        </Label>
        <Label htmlFor={telInputId}>
          Number
          <Input
            type="tel"
            id={telInputId}
            name="number"
            required
          />
          <FormError name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </ContactsForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};