import styled from "styled-components";

export const HeaderContiner = styled.header`
  padding: 3rem 0;
  background-image: ${({ imageBg }) => `url(${imageBg})`};
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top left;
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
`;

export const HeaderHeading = styled.h1`
  color: var(--white);
  position: relative;
  z-index: 22;
`;
