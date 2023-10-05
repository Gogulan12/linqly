import "./App.css";
import logo from "./logo.svg";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
// import HamburgerMenu from "./Components/HamburgerMenu";
import React, { useState } from "react";
// page components
import Home from "./Pages/Home";
import Clio from "./Pages/Clio";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { NavLink } from "react-router-dom";
import "./Components/HamburgerMenu.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className="navContainer">
          <nav>
            <NavLink exact to="/">
              <img src={logo} alt="" />
            </NavLink>
            <button
              className={`hamburger-button ${menuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faBars} className="fa-bars" />
            </button>
            {/* <div className="navigationLinks">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/clio">Clio OCR</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div> */}
            {/* <HamburgerMenu /> */}
          </nav>
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

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/clio">
            <Clio />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
