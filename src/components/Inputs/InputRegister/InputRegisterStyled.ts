import { styled } from "styled-components";

const InputRegisterStyle = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-family: "Cedarville Cursive", cursive !important;
    font-size: 1rem;
    color: var(--color-grey-09);
  }
  input {
    font-family: "Cedarville Cursive", cursive !important;
    font-size: 1rem;
    color: var(--color-grey-09);
    border: none;
    border-bottom: 1px solid var(--color-grey-09);
    background-color: rgba(0, 0, 0, 0);
    margin-bottom: 0.5rem;
  }
`;

export { InputRegisterStyle };
