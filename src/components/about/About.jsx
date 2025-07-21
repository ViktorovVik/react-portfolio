import {aboutImg} from "../../assets/images"
import SectionTitle from "../SectionTitle/SectionTitle";
import "./About.css"
import { FaDownload } from "react-icons/fa6";

const About = () => {
  return (
    <section
      className="about section"
      id="about"
    >
      <div className="container flex-center">
        <SectionTitle title="About me" subtitle="About me"/>
        <div className="about-wrapper">
          <div className="about-img">
            <img
              src={aboutImg}
              alt="about"
            />
          </div>
          <div className="about-info">
            <div className="description">
              <h3>I'm Viktor</h3>
              <h4>A&nbsp;Lead <span>Front-End Developer</span> based in&nbsp;<span>Krasnoyarsk</span>
              </h4>
              <p>
                I&nbsp;design and develop services for customers specializing creating stylish, modern
                websites,
                web services and online stores. My&nbsp;passion is&nbsp;to&nbsp;design digital user experiences through
                meaningful interactions. Check out my&nbsp;Portfolio
              </p>
            </div>
            <ul className="professional-list">
              <li className="list-item">
                <span className="number">5+</span>
                <span className="text">Years of experience</span>
              </li>
              <li className="list-item">
                <span className="number">3K+</span>
                <span className="text">Happy Customers</span>
              </li>
              <li className="list-item">
                <span className="number">5+</span>
                <span className="text">Success Projects</span>
              </li>
            </ul>
            <a
              href=""
              className="inner-info-link"
            >Download
              <FaDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;