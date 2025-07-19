import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaCircleArrowRight, FaArrowDown } from "react-icons/fa6";
import { mainImg } from '../../assets/images'
import "./Home.css"

const Home = () => {
  return (
    <section
      className="home"
      id="home"
    >
      <div className="container home-wrapper">
        <div className="home-info">
          <ul className="media-icons">
            <li className="media-icons-item">
              <a href="">
                <FaFacebookF />
              </a>
            </li>
            <li className="media-icons-item">
              <a href="">
                <FaInstagram />
              </a>
            </li>
            <li className="media-icons-item">
              <a href="">
                <FaGithub />
              </a>
            </li>
          </ul>
          <div className="home-info-content">
            <div className="home-title">
              <h1>Hi, I am Viktor</h1>
            </div>
            <h3>Front-end Developer</h3>
            <p>
              I&nbsp;create stunning websites for your business, Highly experienced in&nbsp;web design and development
            </p>
            <a
              href=""
              className="home-info-link inner-info-link"
            >
              Contact me
              <FaCircleArrowRight/>
            </a>
          </div>
        </div>
        <div className="home-img">
          <img
            src={mainImg}
            alt="man"
          />
        </div>
      </div>
      <a
        href="#about"
        className="scroll-down"
      >
        Scroll down
        <FaArrowDown />
      </a>
    </section>
  );
};

export default Home;