import { styled } from "styled-components";

const CarouselStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .boxArrows {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    width: 50%;
  }
  .arrow {
    background-color: var(--color-grey-00);
    font-size: 50px;
    color: var(--color-pink-00);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  }
  .arrow:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    color: var(--color-yelow-00);
  }

  ul {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    flex: none;
    width: 100%;
    max-width: 50vw;
    height: fit-content;
    max-height: 50vw;
    &::-webkit-scrollbar {
      display: none;
    }

    /* justify-content: center; */
    align-items: center;

    li {
      border: none;
      background-color: var(--color-grey-00);
      padding: 1rem;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
      font-family: "Cedarville Cursive", cursive !important;
    }
  }

  .boxBtnCreate {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
`;

export { CarouselStyle };
