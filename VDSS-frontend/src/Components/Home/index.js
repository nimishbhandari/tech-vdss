import React, { useState } from "react";
import "./Home.scss";
import Logo from "../../images/home.jpg";
import Button from "../Button";
import InputComponent from "../InputComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function Home({ isOpen, setIsOpen }) {
  const [emailInput, setEmail] = useState("");
  return (
    <div className="home">
      <div className="home__right">
        <div className="home__right--card">
          <div className="video">
            <div className="overlay"></div>
            <video autoPlay loop muted>
              <source src="videos/homeVideo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="home__right--desc">
            <h1>Let’s start an Intelligent Digital Journey today!</h1>
            <Button
              btnText="Free Consultation"
              className="call_to_action"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
        <div className="banner">
          <p className="banner_heading">
            We are a team of Developers and Data Scientists committed to deliver
          </p>
          <p className="banner_content">
            AI-Powered Websites | Software Development | Enhanced Digital Reach
          </p>
        </div>
        <span className="mouse"></span>
      </div>
    </div>
  );
}

export default Home;
