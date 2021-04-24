import styled from "styled-components";

export const AddLocationWrapper = styled.div`
  padding: 1rem 0;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  outline: 0;
  border: 0;
  padding: 1rem 2rem;
  font-family: var(--font);
  font-size: 1rem;
  color: var(--dark-gray);
  border: 1px solid var(--dark-gray);
`;

export const Button = styled.button`
  border: 0;
  outline: 0;
  background: var(--dark-gray);
  color: var(--white);
  width: 20%;
  font-family: var(--font);
  font-size: 1.3rem;
  cursor: pointer;
  border: 1px solid transparent;
  border-left: 0;
  transition: 0.4s;

  &:hover {
    background-color: var(--light-gray);
    color: var(--dark-gray);
    border-color: var(--dark-gray);
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;

    overflow: hidden;
  }
`;
