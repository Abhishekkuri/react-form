import React from "react";
import "./Footer.css";
import {
  faLinkedin,
  faFacebookSquare,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer className="footer">
          <a href="https://www.facebook.com/abhishek.kuri.7">
            <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
          </a>
          <a href="https://twitter.com/twimmercom?lang=en">
            <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
          </a>
          <a href="https://www.outlook.com">
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
          </a>
          <a href="https://linkedin.com/in/abhishekkuri">
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
          </a>
      </footer>
    </>
  );
};

export default Footer;
