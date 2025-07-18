import {Navigation} from "../index.js";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <a
            href=""
            className="logo"
          >Viktor
          </a>
            <Navigation/>
          <div className="nav-menu-btn"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;