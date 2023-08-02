import { Link } from "react-router-dom";
import { HeaderStyle } from "./HeaderStyled";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const { page } = useAuth();
  const removeToken = () => {
    localStorage.removeItem("@contactfile:token");
    localStorage.removeItem("@contactfile:id");
  };
  return (
    <HeaderStyle>
      <div>
        <h2>Contact</h2>
        <span>File</span>
      </div>
      {page === "home" ? (
        <Link to="/login">
          <div>
            <h2>Já tenho uma</h2>
            <span className="accountSpan">conta!</span>
          </div>
        </Link>
      ) : null}
      {page === "dashboard" ? (
        <Link to="/">
          <div onClick={removeToken}>
            <h2>Sair da </h2>
            <span className="accountSpan">conta!</span>
          </div>
        </Link>
      ) : null}
      {page === "login" ? (
        <Link to="/register">
          <div>
            <h2>Não tenho </h2>
            <span className="accountSpan">uma conta!</span>
          </div>
        </Link>
      ) : null}
    </HeaderStyle>
  );
};

export { Header };
