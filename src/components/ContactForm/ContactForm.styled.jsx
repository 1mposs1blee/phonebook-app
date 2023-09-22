import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const ContactsForm = styled(Form)`
    margin-bottom: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;

  border: 2px solid black;
  border-radius: 5px;

`;

export const Label = styled.label`
  display: flex;


  flex-direction: column;
  gap: 5px;
`;

export const Input = styled(Field)`
  width: 500px;
  height: 25px;
  font-size: 17px;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 4px;
  background-color: rgb(63, 81, 181);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
`;

export const ErrorText = styled.p`
  color: red;
  max-width: 500px;
`;