import React from "react";
import { FooterContainer } from "./Footer.styles";
import { Container } from "../../../themes/GlobalStyle";
const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <p>My Weather &copy; {new Date().getFullYear()}</p>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
