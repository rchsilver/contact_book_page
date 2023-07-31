import styled from "styled-components";
import cover from "../../assets/cover/cover.png";

const HomeStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh !important;
  width: 100vw;
  background-image: url(${cover});
  background-size: cover;
  background-position: center;
`;
export { HomeStyled };
