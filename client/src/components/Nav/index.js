import React from "react";
// import { Link } from "react-router-dom";
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
          <a className="nav-link" href="/">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/saved">Saved Searches</a>
        </li>
      </ul>

    </nav>
    </Router>

);
}

export default Nav;
