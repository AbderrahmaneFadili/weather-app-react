import React from "react";
import { HeaderContiner, HeaderHeading } from "./Header.styles";
import { Container } from "../../../themes/GlobalStyle";
const Header = () => {
  return (
    <HeaderContiner>
      <Container>
        <HeaderHeading>My Weather</HeaderHeading>
      </Container>
    </HeaderContiner>
  );
};

export default Header;
