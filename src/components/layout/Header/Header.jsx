import React from "react";
import { HeaderContiner, HeaderHeading } from "./Header.styles";
import { Container } from "../../../themes/GlobalStyle";
const Header = () => {
  return (
    <HeaderContiner
      imageBg={`https://source.unsplash.com/random/800x600?weather`}
    >
      <Container>
        <HeaderHeading>My Weather</HeaderHeading>
      </Container>
    </HeaderContiner>
  );
};

export default Header;
