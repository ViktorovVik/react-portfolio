import { Link } from 'react-scroll';
import './Navigation.css'

const Navigation = ({isOpen, onLinkClick }) => {
  const navigationItems = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'О себе' },
    { id: 'skills', label: 'Навыки' },
    { id: 'services', label: 'Услуги' },
    { id: 'portfolio', label: 'Портфолио' }
  ];

  return (
    <nav className={isOpen ? "nav active" : "nav"}>
      <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
        {navigationItems.map((item) => (
          <li key={item.id} className="nav-item">
            <Link
              to={item.id}
              className="nav-link"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="active-link"
              onClick={() => onLinkClick && onLinkClick()}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;