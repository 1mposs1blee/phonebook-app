import { LoginForm } from 'components/LoginForm';
import { Wrapper, Title } from './Login.styled';

const Login = () => {
  return (
    <Wrapper>
      <Title>Login</Title>
      <LoginForm />
    </Wrapper>
  );
};

export default Login;
