import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MavMenuItem, Nav, NavMenu, NavMenuLink, Email } from "./Navbar.styles";
import { signOut } from "../../../store/actions/authActions";
const Navbar = () => {
  const uid = useSelector((state) => state.firebase.auth.uid);
  const email = useSelector((state) => state.firebase.auth.email);
  const dispatch = useDispatch();

  return (
    <Nav>
      <NavMenu>
        {!uid ? (
          <>
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
          </>
        ) : (
          <MavMenuItem>
            <NavMenuLink onClick={() => dispatch(signOut())} to="/signin">
              Sign Out
            </NavMenuLink>
          </MavMenuItem>
        )}

        <MavMenuItem>
          <Email>{email}</Email>
        </MavMenuItem>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
