import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        {/* Logo + Tagline */}
        <div className="footer__brand">
          <h2>American Arbor</h2>
          <p className="tagline">
            Certified Arborists • Tree Health & Preservation
            <br />
            Serving Davis & Greater Sacramento Region
          </p>
          <p className="license">
            ISA Certified Arborist • WE-12345A
            <br />
            Fully Insured • TCIA Member
          </p>
        </div>

        {/* Services */}
        <div className="footer__column">
          <h3>Services</h3>
          <ul>
            <li>
              <Link to="/services">Tree Pruning Trimming</Link>
            </li>
            <li>
              <Link to="/services">Tree Removal</Link>
            </li>
            <li>
              <Link to="/services">Stump Grinding</Link>
            </li>
            <li>
              <Link to="/services">Emergency Storm</Link>
            </li>
            <li>
              <Link to="/services">Assessments</Link>
            </li>
            <li>
              <Link to="/services">Tree Health </Link>
            </li>
            <li>
              <Link to="/services">Cabling & Bracing</Link>
            </li>
            <li>
              <Link to="/services">Planting & Transplanting</Link>
            </li>
          </ul>
        </div>

        {/* Gallery Quick Links */}
        {/* <div className="footer__column">
          <h3>Gallery</h3>
          <ul>
            <li>
              <a href="#">Before & After</a>
            </li>
            <li>
              <a href="#">Large Tree Removals</a>
            </li>
            <li>
              <a href="#">Palm Tree Services</a>
            </li>
            <li>
              <a href="#">Heritage Oak Care</a>
            </li>
            <li>
              <a href="#">Crane Operations</a>
            </li>
            <li>
              <a href="#">View All Projects →</a>
            </li>
          </ul>
        </div> */}

        {/* About / Contact */}
        <div className="footer__column">
          <h3>About</h3>
          <ul>
            <li>
              <Link to="/about">About us</Link>
            </li>

            {/* <li>
              <a href="#">Certifications</a>
            </li> */}
            <li>
              <Link to="/service-area">Service Area</Link>
            </li>
          </ul>

          <div className="footer__contact">
            <p>📍 Davis, CA 95616</p>
            <p>
              📞 <a href="tel:5307607450">(530) 760-7450</a>
            </p>
            <p>
              ✉️{" "}
              <a href="mailto:info@americanarbor.com">info@americanarbor.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} American Arbor. All rights
            reserved.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Google Reviews">
              Gmail
            </a>
            <a href="#" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" aria-label="Facebook">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
