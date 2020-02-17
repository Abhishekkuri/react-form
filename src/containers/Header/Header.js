import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-box">
      <h1 className="header">ATF Developer Portal</h1>
      <nav className="topnav">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink
          to="/developers"
        >
          Developers
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
