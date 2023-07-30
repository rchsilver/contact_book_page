import { styled } from "styled-components";
import cover from "../../assets/cover/coverTable.png";

const LoginStyle = styled.main`
  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-image: url(${cover});
    background-size: cover;
    background-position: center;
    font-family: "Cedarville Cursive", cursive;
    .pinkColorBackground {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px;
      border-radius: 16px;
      background-color: rgba(255, 100, 158, 0.5);
      width: 35%;
      height: 40%;
      gap: 0.5rem;
      h2 {
        font-size: 2rem;
        font-weight: bold;
        color: var(--color-grey-00);
        background-color: var(--color-pink-00);
        border-radius: 16px;
        padding: 0.2rem;
      }
      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        div {
          display: flex;
          justify-content: center;
          /* gap: 0.3rem; */
          label {
            font-size: 1.5rem;
            color: var(--color-pink-01);
            background-color: var(--color-grey-00);
            border-radius: 16px 0 0 16px;
            padding: 0.2rem;
          }
          input {
            caret-color: var(--color-pink-01);
            border: none;
            border-radius: 0 16px 16px 0;
            color: var(--color-pink-01);
            height: 2.5rem;
            width: 100%;
            font-size: 1.5rem;
            font-family: "Cedarville Cursive", cursive;
          }
        }
        button {
          background-color: var(--color-grey-00);
          padding: 0.2rem;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
          transition: background-color 0.3s ease;
          color: var(--color-pink-00);
          font-size: 1.2rem;
          font-weight: bold;
          margin-top: 15px;
          border: none;
          span {
            color: var(--color-yelow-00);
          }
        }
        button:hover {
          cursor: pointer;
          color: var(--color-yelow-00);
          box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
          span {
            color: var(--color-pink-00);
          }
        }
      }
    }
  }
`;

export { LoginStyle };
