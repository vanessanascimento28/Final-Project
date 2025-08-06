import "../../blocks/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
      <h1 className="header__title">Country Search</h1>
      <nav className="header__nav">
        <Link to="/" className="header__link">
          Home
        </Link>
        <Link to="/about" className="header__link">
          About
        </Link>
      </nav>
      </div>
    </header>
  );
}

export default Header;
