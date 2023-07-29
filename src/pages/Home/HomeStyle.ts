import styled from "styled-components";
import cover from "../../assets/cover/cover.png";

const HomeStyled = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh !important;
  width: 100vw;
  /* background-image: linear-gradient(
    to right,
    rgba(238, 130, 238, 5),
    rgba(255, 205, 0, 5),
    rgba(238, 130, 238, 5),
    rgba(255, 355, 0, 5),
    rgba(238, 130, 238, 5)
  ); */
  /* background-image: radial-gradient(
    circle at center,
    var(--color-pink-01),
    var(--color-pastel-00),
    var(--color-orange-00),
    var(--color-pink-00),
    var(--color-orange-00),
    var(--color-orange-00),
    var(--color-pink-01),
    var(--color-pink-00),
    var(--color-orange-00),
    var(--color-pink-01)
  ); */
  background-image: url(${cover});
  background-size: cover;
  background-position: center;
`;
export { HomeStyled };
