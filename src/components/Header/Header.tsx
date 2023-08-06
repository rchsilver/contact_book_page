import { Link, useNavigate } from "react-router-dom";
import { HeaderStyle } from "./HeaderStyled";
import { useAuth } from "../../hooks/useAuth";
import { userReq } from "../../hooks/userReq";

const Header = () => {
  const { page } = useAuth();
  const removeToken = () => {
    localStorage.removeItem("@contactfile:token");
    localStorage.removeItem("@contactfile:id");
  };
  const { openUpdateUser, setOpenUpdateUser } = userReq();
  const navigate = useNavigate();
  return (
    <HeaderStyle>
      <div onClick={() => navigate("/")}>
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
      {page === "login" ? (
        <Link to="/register">
          <div>
            <h2>Não tenho </h2>
            <span className="accountSpan">uma conta!</span>
          </div>
        </Link>
      ) : null}
      {page === "dashboard" ? (
        <section className="boxDashRightBtns">
          <div onClick={() => setOpenUpdateUser(!openUpdateUser)}>
            <h2>Editar </h2>
            <span className="accountSpan">Perfil</span>
          </div>
          <Link to="/">
            <div onClick={removeToken}>
              <h2>Sair da </h2>
              <span className="accountSpan">conta!</span>
            </div>
          </Link>
        </section>
      ) : null}
    </HeaderStyle>
  );
};

export { Header };
