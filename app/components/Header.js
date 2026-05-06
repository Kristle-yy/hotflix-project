import Link from "next/link";

const Header = () => {
  return (
    <header className="header">

      <div className="logo">
        HOT<span>FLIX</span>
      </div>

      <nav className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/teams">Teams</Link>
      </nav>

      <div className="header-right">

        <div className="search-box">
          <input type="text" placeholder="Search movies..." />
          <span className="search-icon">⌕</span>
        </div>

        <button className="profile-btn">
          My List
        </button>

      </div>

    </header>
  );
};

export default Header;