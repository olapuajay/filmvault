import React from "react";
import Movielogo from "../assets/movielogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 d-flex justify-content-start align-items-center gap-4">
      <Link className="navbar-brand" to="/">
        <img src={Movielogo} alt="LOGO" style={{ height: 40, width: 40 }} />
      </Link>
      <div className="nav-item">
        <Link className="nav-link text-info fw-bold text-decoration-none custom-nav-link" to="/" style={navbarStyle}>
          Movies
        </Link>
      </div>
      <div className="nav-item">
        <Link className="nav-link text-info fw-bold text-decoration-none custom-nav-link" to="/watchlist" style={navbarStyle}>
          Watchlist
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
