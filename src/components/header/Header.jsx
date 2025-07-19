import {Navigation} from "../index.js";
import { FaXing } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import './Header.css';
import {useState} from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <a
            href=""
            className="logo"
          >Viktor
          </a>
            <Navigation isOpen={isOpen}/>
          <div className="nav-menu-btn" onClick={toggleMenu}>
            {isOpen ? <FaXing/> : <FaBarsStaggered/>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;