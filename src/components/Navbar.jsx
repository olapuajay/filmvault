import React from "react";
import Movielogo from "../assets/movielogo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <Link className="navbar-brand" to="/">
        <img src={Movielogo} alt="LOGO" style={{ height: 40, width: 40 }} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto d-flex align-items-center">
          <li className="nav-item">
            <Link className="nav-link text-dark custom-nav-link" to="/">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark custom-nav-link" to="/watchlist">
              Watchlist
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
