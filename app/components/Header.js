"use client";

import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="header">

      {/* LOGO */}
      <h1 className="logo">
        HOT<span>FLIX</span>
      </h1>

      {/* NAV */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/teams">Teams</Link>
      </nav>

      {/* RIGHT */}
      <div className="header-right">

        {/* SEARCH */}
        <div className="search-box">
          <input type="text" placeholder="Search movies..." />
          <FaSearch className="search-icon" />
        </div>

        {/* PROFILE */}
        <div className="profile-menu">

          <button
            className="profile-icon"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            👤
          </button>

          {profileOpen && (
            <div className="dropdown">
              <Link href="/login">Login</Link>
              <Link href="/signup">Sign Up</Link>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      <FaBars
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      />
    </header>
  );
};

export default Header;