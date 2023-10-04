import "./App.css";
import logo from "./logo.svg";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

// page components
import Home from "./Pages/Home";
import Clio from "./Pages/Clio";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <header className="App-header">
          <img src={logo} alt="" />
        </header> */}
        <nav>
          <NavLink exact to="/">
            <img src={logo} alt="" />
          </NavLink>
          {/* <a href="/">Home</a>
          <a href="/clio">Clio OCR</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a> */}
          <div>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/clio">Clio OCR</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>

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
