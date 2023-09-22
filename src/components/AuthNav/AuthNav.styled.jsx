import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const Link = styled(NavLink)`
  font-size: 18px;
  font-weight: 600;
  transition: color 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: rgb(63, 81, 181);
  }

  &.active {
    color: rgb(63, 81, 181);
  }
`;
