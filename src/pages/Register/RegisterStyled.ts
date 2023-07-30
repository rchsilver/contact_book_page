import { styled } from "styled-components";
import cover from "../../assets/cover/pinkTale.jpg";

const RegisterStyle = styled.main`
  section {
    z-index: 999;
    font-family: "Cedarville Cursive", cursive !important;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    max-height: 100vh;
    position: relative;
    background-image: url(${cover});
    background-size: cover;
    background-position: center;
    gap: 0.5rem;
    overflow: hidden;
    h1 {
      z-index: 999;
      position: relative;
      top: 15px;
      font-size: 1.3rem;
      font-weight: bold;
      color: var(--color-grey-09);
    }
    img {
      z-index: 0;
      width: 30%;
      height: 100%;
      position: absolute;
      top: 35px;
    }
    form {
      z-index: 999;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      top: 35px;
      button {
        font-family: "Cedarville Cursive", cursive !important;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        /* border: 2px solid var(--color-grey-09); */
        border-bottom: 1px solid var(--color-grey-09);
        font-size: 1.2rem;
        position: absolute;
        color: var(--color-grey-09);
        bottom: -45px;
        padding: 2px;
      }
      button:hover {
        border: 1px solid var(--color-grey-09);
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
        cursor: pointer;
      }
    }
  }
`;

export { RegisterStyle };
