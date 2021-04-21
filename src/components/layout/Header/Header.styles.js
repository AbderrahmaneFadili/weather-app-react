import styled from "styled-components";
import imageBgSM from "../../../assets/images/header-small.jpg";
import imageBgLG from "../../../assets/images/header-large.jpg";

export const HeaderContiner = styled.header`
  padding: 3rem 0;
  background-image: url(${imageBgSM});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  height: 24vh;
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
  }
`;

export const HeaderHeading = styled.h1`
  color: var(--white);
  position: relative;
  z-index: 22;
`;
