import React from "react";
import "../globals.css";

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">
        HOT<span>FLIX</span>
      </div>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Catalog</a>
        <a href="#">Pricing Plan</a>
        <a href="#">Pages</a>
      </nav>

      <div className="nav-right">
        <input type="text" placeholder="Search..." />
        <button className="nickname-btn">NICKNAME</button>
      </div>
    </header>
  );
};

export default Header;