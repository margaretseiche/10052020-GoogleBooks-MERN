import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./style.css";

function Nav() {
  return (

    <Router>
      <nav className="navbar navbar-dark">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>  
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                  Saved Searches
                </Link>
              </li>
            </ul>

    </nav>
    </Router>

);
}

export default Nav;
