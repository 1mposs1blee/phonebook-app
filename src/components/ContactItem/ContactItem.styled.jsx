import styled from '@emotion/styled';

export const ContactsListItem = styled.li``;

export const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ListItemText = styled.p``;

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
