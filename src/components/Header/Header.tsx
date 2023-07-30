import { Link } from "react-router-dom";
import { HeaderStyle } from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <h2>Contact</h2>
        <span>File</span>
      </div>
      <Link to="/login">
        <div>
          <h2>Já tenho uma</h2>
          <span className="accountSpan">conta!</span>
        </div>
      </Link>
    </HeaderStyle>
  );
};

export { Header };
