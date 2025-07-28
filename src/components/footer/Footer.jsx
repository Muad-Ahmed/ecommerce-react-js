import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import "./footer.css";

const footerLinks = [
  "Overview",
  "Feature",
  "Pricing",
  "Careers",
  "Help",
  "Privacy",
  "Contact",
];
const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="container">
          <div className="footer-top">
            <div className="ft-col1">
              <div className="ft-logo">
                <Link to="/" className="logo">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="ft-links">
                {footerLinks.map((link) => (
                  <Link to="/" className="ft-link">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            <div className="ft-col2">
              <h5>Join Our Newsletter</h5>
              <div className="ft-form">
                <form action="">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Reda Store. All rights reserved
            </p>
            <div className="ft-policy">
              <Link to="/" className="ft-link">
                Terms
              </Link>
              <Link to="/" className="ft-link">
                Privacy
              </Link>
              <Link to="/" className="ft-link">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
