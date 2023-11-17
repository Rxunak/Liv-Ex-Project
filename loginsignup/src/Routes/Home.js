import React from "react";

import "../Styles/Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import image from "../Assets/Liv-ex.jpg";

function Home() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
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
        <div className="mid-con">
          <h2 className="h2-home">
            Join the Tech Revolution:{" "}
            <strong className="st-home">Sign Up Now!</strong>
          </h2>
        </div>

        <div className="navr-button">
          <Link to="/SignUp">
            <button className="navbabutton">Sign Up</button>
          </Link>
        </div>
      </div>

      <div className="bottom">
        <div className="bottm-head">FAQ</div>
        <div className="accordion">
          {data.map((item, i) => (
            <div className="item">
              <div key={item.id} className="title" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "contentt show" : "contentt"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    id: 1,
    question: "What areas of the UK do you provide IT support?",

    answer:
      "We provide IT Support Services to hundreds of businesses located all over the UK and have a nationwide presence. Our UK Head office is located in Tunbridge Wells, and we have coverage across London, and the whole of the UK.",
  },

  {
    id: 2,
    question: "What industry partnerships do you hold?",

    answer:
      "Infinity Group is a leading Microsoft Partner in the UK, offering technology services, solutions, and managed services. We hold Microsoft Soultion Designations across; Modern Work, Business Applications, Data & AI (Azure), and Digital & App Innovation (Azure). We also partner with a number of other vendors to ensure our clients benefit from the best possible technologies.",
  },

  {
    id: 3,
    question: "What is RB Support's avaerage support response rate?",

    answer:
      "In order to provide a fast and efficient service, we work hard to keep our average call response times to under 1 minute. This ensures there is minimum delay when you call us and enables us to resolve your issues as soon as they happen.",
  },
];

export default Home;
