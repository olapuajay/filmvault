import React from "react";
import Movielogo from "../assets/movielogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  
  return (
    <nav className="lg:flex flex items-center gap-4 lg:p-4 p-2">
      <Link to="/">
        <img src={Movielogo} alt="LOGO" style={{ height: 40, width: 40 }} />
      </Link>
      <Link className="md:hover:text-sky-600 duration-300" to="/">
        Movies
      </Link>
      <Link className="md:hover:text-sky-600 duration-300" to="/watchlist">
        Watchlist
      </Link>
      
    </nav>
  );
}

export default Navbar;
