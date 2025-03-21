import React, { useState } from "react";
import Movielogo from "../assets/movielogo.png";
import { Link } from "react-router-dom";
import { AlignJustify, X } from "lucide-react";

function Navbar() {
  const [nav, setNav] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-[#121212] text-white shadow-md fixed w-full top-0 z-50">
      {/* Logo */}
      <Link to="/">
        <img src={Movielogo} alt="LOGO" className="h-10 w-10" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6">
        <Link className="hover:text-sky-500 transition duration-300" to="/">Home</Link>
        <Link className="hover:text-sky-500 transition duration-300" to="/popular">Popular</Link>
        <Link className="hover:text-sky-500 transition duration-300" to="/tvshows">TV Shows</Link>
        <Link className="hover:text-sky-500 transition duration-300" to="/watchlist">Watchlist</Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <button className="md:hidden text-gray-300" onClick={handleNav}>
        {nav ? <X size={28} /> : <AlignJustify size={28} />}
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 left-0 w-2/3 h-screen bg-gray-800 shadow-lg flex flex-col p-4 gap-6 transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link to="/">
          <img src={Movielogo} alt="LOGO" className="h-10 w-10" />
        </Link>
        <Link className="text-gray-300 text-lg" to="/" onClick={handleNav}>Home</Link>
        <Link className="text-gray-300 text-lg" to="/popular" onClick={handleNav}>Popular</Link>
        <Link className="text-gray-300 text-lg" to="/tvshows" onClick={handleNav}>TV Shows</Link>
        <Link className="text-gray-300 text-lg" to="/watchlist" onClick={handleNav}>Watchlist</Link>
      </div>
    </nav>
  );
}

export default Navbar;
