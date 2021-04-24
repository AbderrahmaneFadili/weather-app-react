import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  color: var(--white);
  z-index: 22;

  @media screen and (max-width: 768px) {
    margin: 1rem auto;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
`;

export const MavMenuItem = styled.li`
  margin: 0 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NavMenuLink = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  font-size: 1.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Email = styled.span`
  font-size: 1.3rem;
  color: var(--white);
`;
