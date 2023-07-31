import { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { RegisterBtn } from "../../components/RegisterButton/RegisterBtn";
import { HomeStyled } from "./HomeStyle";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Home = () => {
  const { setPage } = useAuth();
  useEffect(() => {
    setPage("home");
  }, []);
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
