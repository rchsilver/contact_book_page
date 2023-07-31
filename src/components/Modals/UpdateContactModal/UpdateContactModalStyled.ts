import { styled } from "styled-components";

const UpdateContactModalStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-grey-00);
    width: fit-content;
    height: fit-content;
    padding: 1rem;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
    position: relative;
    .registerBtn {
      margin-top: 30px;
    }
    .closeBtn {
      position: absolute;
      right: 5px;
      top: 5px;
      color: var(--color-grey-09);
      font-size: 1rem;
      padding: 0.2rem;
      border: 1px solid var(--color-grey-00);
    }
    .closeBtn:hover {
      border: 1px solid var(--color-grey-09);
      cursor: pointer;
    }
    .deleteBox {
      display: flex;
      gap: 0.5rem;
      .noDeleteBtn {
        color: var(--color-yelow-00);
        background-color: var(--color-pink-00);

        span {
          color: var(--color-yelow-00);
        }
        &:hover {
          background-color: var(--color-yelow-00);
          color: var(--color-pink-00);
          span {
            color: var(--color-pink-00);
          }
        }
      }
      .yesDeleteBtn {
        color: var(--color-pink-00);
        background-color: var(--color-grey-00);

        span {
          color: var(--color-pink-00);
        }
        &:hover {
          background-color: var(--color-yelow-00);
          color: var(--color-pink-00);
          span {
            color: var(--color-pink-00);
          }
        }
      }
    }
  }
`;

export { UpdateContactModalStyle };
