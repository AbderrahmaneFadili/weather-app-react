import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  border: 0;
  outline: 0;
  background: var(--dark-gray);
  font-family: var(--font);
  color: var(--white);
  font-size: 1rem;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background: var(--dark-gray-hover);
  }
`;
