import React from "react";
import { MavMenuItem, Nav, NavMenu, NavMenuLink, Email } from "./Navbar.styles";

const Navbar = () => {
  return (
    <Nav>
      <NavMenu>
        <MavMenuItem>
          <NavMenuLink
            activeStyle={{
              textDecoration: "underline",
            }}
            exact
            to="/signin"
          >
            Sign In
          </NavMenuLink>
        </MavMenuItem>

        <MavMenuItem>
          <NavMenuLink
            activeStyle={{
              textDecoration: "underline",
            }}
            exact
            to="/signup"
          >
            Sign Up
          </NavMenuLink>
        </MavMenuItem>

        <MavMenuItem>
          <NavMenuLink to="/signin">Sign Out</NavMenuLink>
        </MavMenuItem>

        <MavMenuItem>
          <Email>email@email.com</Email>
        </MavMenuItem>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
