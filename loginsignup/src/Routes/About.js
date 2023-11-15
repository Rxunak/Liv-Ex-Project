import "../Styles/About.css";

import logo from "../Assets/About.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faUsersBetweenLines } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="About-container">
      <div className="about-head2">
        <h1>What we do the best</h1>
      </div>

      <div className="Parall">
        <div className="paral1">
          <FontAwesomeIcon icon={faClock} fade className="abouticon" />
          <div className="overlay-about">
            <p className="home-text1">Responsive</p>
          </div>
        </div>

        <div className="paral1">
          <FontAwesomeIcon icon={faMoneyBill} fade className="abouticon" />

          <div className="overlay-about">
            <p className="home-text1">Cheap</p>
          </div>
        </div>

        <div className="paral1">
          <FontAwesomeIcon
            icon={faUsersBetweenLines}
            fade
            className="abouticon"
          />
          <div className="overlay-about">
            <p className="home-text1">Team Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
