import {Navigation} from "../index.js";
import { FaXing } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import {useState} from "react";
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <a
            href="#"
            className="logo"
          >Viktor
          </a>
            <Navigation isOpen={isOpen} onLinkClick={closeMenu}/>
          <div className="nav-menu-btn" onClick={toggleMenu}>
            {isOpen ? <FaXing/> : <FaBarsStaggered/>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;