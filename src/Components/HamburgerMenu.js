import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./HamburgerMenu.css";

function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`hamburger-menu ${menuOpen ? "open" : ""}`}>
      <button className="hamburger-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`navigationLinks ${menuOpen ? "open" : ""}`}>
        <NavLink exact to="/" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/clio" onClick={toggleMenu}>
          Clio OCR
        </NavLink>
        <NavLink to="/about" onClick={toggleMenu}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu}>
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default HamburgerMenu;
