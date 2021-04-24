import styled from "styled-components";
import imageBgSM from "../../../assets/images/header-small.jpg";
import imageBgLG from "../../../assets/images/header-large.jpg";
import { Link } from "react-router-dom";
import { Container } from "../../../themes/GlobalStyle";

export const HeaderContiner = styled.header`
  padding: 2rem 0;
  background-image: url(${imageBgSM});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 50vh;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }

  @media screen and (min-width: 768px) {
    background-image: url(${imageBgLG});
    height: 26vh;
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;

  @media screen and (max-width: 768px) {
    margin: 1rem auto;
  }
`;

export const HeaderHeading = styled.h1`
  color: var(--white);
  position: relative;
  z-index: 22;
`;

export const HeaderWrapper = styled(Container)`
  align-items: center;
`;
