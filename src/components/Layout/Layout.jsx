import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar';
import { Wrapper } from './Layout.styled';
import { Loader } from 'components/Loader';

export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
