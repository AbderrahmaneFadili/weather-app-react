import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  color: var(--white);
  z-index: 22;
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
`;

export const MavMenuItem = styled.li`
  margin: 0 2rem;
`;

export const NavMenuLink = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  font-size: 1.3rem;
`;

export const Email = styled.span`
  font-size: 1.3rem;
  color: var(--white);
`;
