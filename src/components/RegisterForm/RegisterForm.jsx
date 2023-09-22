import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from 'hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearAuthError } from 'redux/AuthSlice';
import { register } from 'redux/AuthSlice/operations';
import {
  RegForm,
  Label,
  Input,
  Button,
  ToastText,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { isLoading, isAuthError } = useAuth();

  useEffect(() => {
    if (isAuthError) {
      toast.error(<ToastText>Not a unique email address.</ToastText>, {
        autoClose: 2000,
      });

      dispatch(clearAuthError());
    }
  }, [dispatch, isAuthError]);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <>
      <ToastContainer />
      <RegForm onSubmit={handleSubmit}>
        <Label>
          Username
          <Input type="text" name="name" required />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" required />
        </Label>
        <Label>
          Password
          <Input minLength="8" type="password" name="password" required />
        </Label>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Register'}
        </Button>
      </RegForm>
    </>
  );
};
