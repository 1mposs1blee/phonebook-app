import { NavLink } from 'react-router-dom';
import styled from "@emotion/styled";

export const MainNavigation = styled.nav`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
`;

export const Link = styled(NavLink)`
font-size: 18px;

  &:hover,
  &:focus {
    color: rgb(63, 81, 181);
  }

  &.active {
    color: rgb(63, 81, 181);
  }
`;