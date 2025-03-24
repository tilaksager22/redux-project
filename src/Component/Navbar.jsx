import React from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/students">Students</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
