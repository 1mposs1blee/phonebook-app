import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logIn } from 'redux/AuthSlice/operations';
import { LogForm, Label, Input, Button, ToastText } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .then(({ meta: { requestStatus }, payload }) => {
        if (requestStatus === 'rejected') throw new Error(payload);
      })
      .catch(({ message }) => {
        toast.error(<ToastText>{message}</ToastText>, {
          autoClose: 2000,
        });
      });

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
