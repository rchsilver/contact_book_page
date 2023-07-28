import { Header } from "../../components/Header/Header";
import { RegisterBtn } from "../../components/RegisterButton/RegisterBtn";
import { HomeStyled } from "./HomeStyle";

const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <RegisterBtn />
    </HomeStyled>
  );
};

export { Home };
