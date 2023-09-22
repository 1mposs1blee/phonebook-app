import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from 'hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearAuthError } from 'redux/AuthSlice';
import { logOut } from 'redux/AuthSlice/operations';
import { ButtonLogOut, Greeting, Wrapper, ToastText } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user, isLoading, isAuthError } = useAuth();

  useEffect(() => {
    if (isAuthError) {
      toast.error(
        <ToastText>
          Error logging out. Please reload the page and try again.
        </ToastText>,
        {
          autoClose: 2000,
        }
      );

      dispatch(clearAuthError());
    }
  }, [dispatch, isAuthError]);

  return (
    <>
      <ToastContainer />
      <Wrapper>
        <Greeting>Welcome, {user.name}!</Greeting>
        <ButtonLogOut onClick={() => dispatch(logOut())} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Logout'}
        </ButtonLogOut>
      </Wrapper>
    </>
  );
};
