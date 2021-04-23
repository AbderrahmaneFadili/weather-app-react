import styled from "styled-components";

export const LoactionsWrapper = styled.div`
  width: 19%;
  padding: 1rem;
  background: var(--light-gray);
  color: var(--dark-gray);
  height: 340px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: var(--light-gray);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--dark-gray);
    outline: 1px solid slategrey;
  }
`;

export const Title = styled.h1`
  color: var(--dark-gray);
  margin-bottom: 2rem;
`;

export const LoactionsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;
