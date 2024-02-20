import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-cont">
      <div className="logo-cont">
        {/* <FontAwesomeIcon icon={faFacebook} /> */}
        <img
          className="logo-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
          alt=""
        />
      </div>
      <div className="nav-links">
        <NavLink className="nav-link" to="/home"><p>Home</p></NavLink>
        <NavLink className="nav-link" to="/gallery"><p>Gallery</p></NavLink>
        <NavLink className="nav-link" to="/contact"><p>Contact</p></NavLink>
        <NavLink className="nav-link" to="/about"><p>About</p></NavLink>
      </div>
    </div>
  );
};

export default Navbar;
