import React from "react";
import { FooterContainer, Copy } from "./Footer.styles";
import { Container } from "../../../themes/GlobalStyle";
const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Copy>My Weather &copy; {new Date().getFullYear()}</Copy>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
