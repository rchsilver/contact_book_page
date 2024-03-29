import { styled } from "styled-components";

const RegisterBtnStyle = styled.button`
  border-radius: 50%;
  padding: 15px;
  width: 175px;
  height: 175px;
  background-color: var(--color-pink-00);
  border: 20px solid var(--color-grey-00);
  color: var(--color-grey-00);
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
    background-color: var(--color-grey-00);
    border: 20px solid var(--color-pink-00);
    color: var(--color-pink-00);
  }
`;

export { RegisterBtnStyle };
