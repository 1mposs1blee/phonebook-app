import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { refreshUser } from 'redux/AuthSlice/operations';
import { useAuth } from 'hooks';
// import { RefreshingMessage } from './App.styled';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const PhoneBookPage = lazy(() => import('pages/PhoneBook'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (

      !isRefreshing &&  (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/phonebook"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo="/phonebook"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="phonebook"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<PhoneBookPage />}
                />
              }
            />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      )
  );
};
