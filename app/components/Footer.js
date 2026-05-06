import "../globals.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="logo">
          HOT<span>FLIX</span>
        </div>

        <div className="copyright">
          <p>© HOTFLIX</p>
          <p>
            Create by <span className="author">HOTFLIX</span>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <a href="#">About Us</a>
        <a href="#">Contacts</a>
        <a href="#">Privacy policy</a>

        <button className="scroll-top">↑</button>
      </div>
    </footer>
  );
};

export default Footer;