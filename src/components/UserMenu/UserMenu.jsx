import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/AuthSlice/operations';
import { ButtonLogOut, Greeting, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useAuth();

  return (
    <Wrapper>
      <Greeting>Welcome, {user.name}</Greeting>
      <ButtonLogOut onClick={() => dispatch(logOut())} disabled={isLoading}>{isLoading ? "Loading..." : "Logout"}</ButtonLogOut>
    </Wrapper>
  );
};
