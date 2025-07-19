import { Link } from 'react-scroll';
import './Navigation.css'

const Navigation = ({isOpen}) => {
  const liItems = ["home", "about", "skills", "services", "portfolio"];

  return (
    <nav className={isOpen ? "nav active" : "nav"}>
      <div className={isOpen ? "nav-menu active" : "nav-menu"}>
        {liItems.map((li, index) => (
          <Link
            to={`#${li}`}
            key={index}
            className="nav-link">{li}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;