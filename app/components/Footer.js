import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-left">

        <div className="footer-logo">
          HOT<span>FLIX</span>
        </div>

        <p>© HOTFLIX 2026</p>

        <p>Create by HOTFLIX</p>

      </div>

      <div className="footer-right">

        <div className="footer-links">

          <Link href="/">About Us</Link>

          <Link href="/">Contacts</Link>

          <Link href="/">Privacy Policy</Link>

        </div>

        <button className="scroll-top">
          ↑
        </button>

      </div>

    </footer>
  );
};

export default Footer;