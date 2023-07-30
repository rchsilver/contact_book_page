import { styled } from "styled-components";

const PaperButtonStyle = styled.button`
  border: none;
  padding: 0.5rem;
  color: var(--color-pink-00);
  font-weight: bold;
  font-size: 1rem;
  background-color: var(--color-grey-00);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  span {
    color: var(--color-yelow-00);
  }
  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    color: var(--color-yelow-00);
    span {
      color: var(--color-pink-00);
    }
  }
`;

export { PaperButtonStyle };
