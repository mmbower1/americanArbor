// /src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when clicking a link
  const closeMenu = () => setIsOpen(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar ${scrolled ? "scrolled" : ""} ${
          isOpen ? "menu-open" : ""
        }`}
      >
        <div className="navbar__container">
          {/* Logo */}
          <a href="/" className="navbar__logo">
            <h2>American Arbor</h2>
          </a>

          {/* Desktop Menu */}
          <ul className="navbar__menu">
            <li>
              <Link to="/services" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" onClick={closeMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
          </ul>

          {/* Contact Info - Desktop */}
          <div className="navbar__contact">
            <span>📍 Davis, CA</span>
            <a href="tel:5307607450">📞 (530) 760-7450</a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`navbar__toggle ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`navbar__mobile-overlay ${isOpen ? "open" : ""}`}>
        <div className="navbar__mobile-menu">
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/gallery" onClick={closeMenu}>
            Gallery
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <div className="navbar__mobile-contact">
            <p>📍 Davis, CA</p>
            <p>📞 (530) 760-7450</p>
            <a href="tel:5307607450" className="mobile-cta">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
