import styled from '@emotion/styled';

export const ToastText = styled.span`
  font-weight: 600;
`;

export const ContactsListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const ListItemText = styled.p`
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonDeleteContact = styled.button`
  font-weight: 600;
  width: 100px;
  height: 30px;
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

export const LineWrapper = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #000;
`;
