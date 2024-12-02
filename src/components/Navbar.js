import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul>
        <li>
          {" "}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
