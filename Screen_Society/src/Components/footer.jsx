import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../Components/footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* MovieHive Branding */}
        <h2 className="footer-logo">ReelConnect</h2>
        <p>Explore the world of cinema with us! 🎬</p>

        {/* Quick Links */}
        <nav className="footer-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/explore">Explore</NavLink>
          <NavLink to="/trending">Trending</NavLink>
          <NavLink to="/genres">Genres</NavLink>
          <NavLink to="/watchlist">Watchlist</NavLink>
        </nav>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>

        {/* Copyright */}
        <p className="copyright">© 2025 ReelConnect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
