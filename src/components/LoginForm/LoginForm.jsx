import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from 'hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearAuthError } from 'redux/AuthSlice';
import { logIn } from 'redux/AuthSlice/operations';
import { LogForm, Label, Input, Button, ToastText } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoading, isAuthError } = useAuth();

  useEffect(() => {
    if (isAuthError) {
      toast.error(<ToastText>Invalid email address or password.</ToastText>, {
        autoClose: 2000,
      });

      dispatch(clearAuthError());
    }
  }, [dispatch, isAuthError]);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <>
      <ToastContainer />
      <LogForm onSubmit={handleSubmit}>
        <Label>
          Email
          <Input type="email" name="email" required />
        </Label>
        <Label>
          Password
          <Input minLength="8" type="password" name="password" required />
        </Label>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Log In'}
        </Button>
      </LogForm>
    </>
  );
};
