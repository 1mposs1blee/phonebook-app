import { RegisterForm } from 'components/RegisterForm';
import { Wrapper, Title } from './Register.styled';
const Register = () => {
  return (
    <Wrapper>
      <Title>Registration</Title>
      <RegisterForm />
    </Wrapper>
  );
};

export default Register;
