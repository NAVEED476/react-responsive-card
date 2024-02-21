import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }
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
      <div className="menu" onClick={()=>{
          setIsMenuOpen(!isMenuOpen)
          console.log("clicked")
        }}> 
          <span></span>
          <span></span>
          <span></span>
        </div>
      <div className="nav-links">
        
        <ul className={isMenuOpen ? "open" : ""}>
          <NavLink className="nav-link" to="/home" onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
            <p>Home</p>
          </NavLink>
          <NavLink className="nav-link" to="/gallery" onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
            <p>Gallery</p>
          </NavLink>
          <NavLink className="nav-link" to="/contact" onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
            <p>Contact</p>
          </NavLink>
          <NavLink className="nav-link" to="/about" onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
            <p>About</p>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
