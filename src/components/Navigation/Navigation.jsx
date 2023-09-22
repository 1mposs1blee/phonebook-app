import { useAuth } from 'hooks';
import { MainNavigation, Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <MainNavigation>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contactbook">ContactBook</Link>}
    </MainNavigation>
  );
};
