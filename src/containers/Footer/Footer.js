import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="text-center center-block">
          <a href="https://www.facebook.com/abhishek.kuri.7">
            <i className="fa fa-facebook-square fa-3x social" />
          </a>
          <a href="https://twitter.com/twimmercom?lang=en">
            <i className="fa fa-twitter-square fa-3x social" />
          </a>
          <a href="https://www.outlook.com">
            <i className="fa fa-envelope-square fa-3x social" />
          </a>
          <a href="https://linkedin.com/in/abhishekkuri">
            <i className="fa fa-linkedin-square fa-3x social" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
