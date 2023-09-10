import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  padding-left: 30px;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContactsListItem = styled.li``;

export const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ButtonDeleteContact = styled.button`
  padding: 2px;

  width: 60px;

  border: 1px solid black;
  border-radius: 5px;

  background-color: silver;

  &:hover,
  &:focus {
    cursor: pointer;
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const MessageNotFound = styled.p``;
