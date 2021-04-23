import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

export const LoactionItem = styled.li`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 0.9rem;
  background: var(--dark-gray);
  color: var(--white);
  align-items: center;
`;

export const LocationName = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const DeleteIcon = styled(FaTrashAlt)`
  cursor: pointer;
  font-size: 1.2rem;
  transition: 0.4s;

  &:active {
    transform: scale(1.5);
  }
`;
