import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logOut } from 'redux/AuthSlice/operations';
import { ButtonLogOut, Greeting, Wrapper, ToastText } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut())
      .then(({ meta: { requestStatus }, payload }) => {
        if (requestStatus === 'rejected') throw new Error(payload);
      })
      .catch(({ message }) => {
        toast.error(<ToastText>{message}</ToastText>, {
          autoClose: 2000,
        });
      });
  };

  return (
    <>
      <ToastContainer />
      <Wrapper>
        <Greeting>Welcome, {user.name}!</Greeting>
        <ButtonLogOut onClick={handleLogOut} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Logout'}
        </ButtonLogOut>
      </Wrapper>
    </>
  );
};
