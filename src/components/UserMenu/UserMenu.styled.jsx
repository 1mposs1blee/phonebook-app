import styled from '@emotion/styled';

export const ToastText = styled.span`
  font-weight: 600;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const Greeting = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: black;
`;

export const ButtonLogOut = styled.button`
  width: 100px;
  height: 30px;
  font-weight: 600;
  border-radius: 4px;
  background-color: rgb(63, 81, 181);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: rgb(0, 170, 255);
  }
`;
