import React from "react";
import {
  HeaderContiner,
  HeaderHeading,
  Logo,
  HeaderWrapper,
} from "./Header.styles";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <HeaderContiner>
      <HeaderWrapper>
        <Logo to="/">
          <HeaderHeading>My Weather</HeaderHeading>
        </Logo>
        <Navbar />
      </HeaderWrapper>
    </HeaderContiner>
  );
};

export default Header;
