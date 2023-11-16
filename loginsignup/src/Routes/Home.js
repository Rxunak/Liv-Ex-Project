import React from "react";
import { ReactDOM } from "react-dom/client";
import "../Styles/Home.css";
import { Link } from "react-router-dom";

import logo from "../Assets/ITHome.jpg";
import image from "../Assets/Liv-ex.jpg";

function Home() {
  return (
    <div className="home-container">
      <div
        className="top-container"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1 className="heading-home">
          Your Ultimate Destination <br />
          for Expert IT Support Solutions
        </h1>
        <br />
        <p className="p-home">
          Elevating IT Support. Your one-stop solution <br />
          for expert tech assistance, ensuring seamless <br />
          and secure experiences in the digital realm.
        </p>
      </div>

      <div className="middle-container">
        <h2 className="h2-home">
          Join the Tech Revolution:{" "}
          <strong className="st-home">Sign Up Now!</strong>
        </h2>

        <div className="nav-button">
          <Link to="/SignUp">
            <button className="navbarbutton">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
