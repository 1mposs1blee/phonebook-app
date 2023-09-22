import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsRefreshing,
  selectIsLoggedIn,
  selectIsLoading,
  selectIsAuthError,
} from 'redux/AuthSlice';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const isAuthError = useSelector(selectIsAuthError);

  return { user, isRefreshing, isLoggedIn, isLoading, isAuthError };
};
