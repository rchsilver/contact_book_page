import { styled } from "styled-components";

const HeaderStyle = styled.header`
  z-index: 999;
  margin: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 100vw;
  padding: 1rem;
  background-color: var(--color-pink-00);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  div {
    display: flex;
    background-color: var(--color-grey-00);
    padding: 0.2rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
    h2 {
      color: var(--color-pink-00);
      font-size: 1.2rem;
    }
    span {
      color: var(--color-yelow-00);
      font-size: 1.2rem;
      font-weight: bold;
    }
    .accountSpan {
      margin-left: 0.2rem;
    }
  }
  div:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
    cursor: pointer;

    h2 {
      color: var(--color-yelow-00);
    }
    span {
      color: var(--color-pink-00);
    }
  }
`;

export { HeaderStyle };
