import styled from "styled-components";

export const LoactionButton = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 1rem 0.8rem;
  font-size: 1rem;
  font-family: var(--font);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 1rem;
  color: var(--white);
  background: var(--orange);
  transition: 0.4s all;

  &:hover {
    background-color: var(--orange-hover);
  }
`;
