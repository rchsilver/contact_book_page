import { Header } from "../../components/Header/Header";
import { RegisterBtn } from "../../components/RegisterButton/RegisterBtn";
import { HomeStyled } from "./HomeStyle";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <Link to="/register">
        <RegisterBtn />
      </Link>
    </HomeStyled>
  );
};

export { Home };
