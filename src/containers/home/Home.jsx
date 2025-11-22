// File: src/App.tsx
import React from "react";
import "./Home.scss";
// import logo from "./assets/logo.png"; // place logo in src/assets/logo.png

const Home = () => {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container header__inner">
          <div className="logo">
            {/* <img src={logo} alt="All Tree Care LA" /> */}
            <div className="logo__text">
              <h1>American Arbor</h1>
            </div>
          </div>

          <nav className="nav">
            <ul>
              <li className="dropdown">
                <a href="#">
                  ABOUT <span>▼</span>
                </a>
              </li>
              <li className="dropdown">
                <a href="#">
                  SERVICES <span>▼</span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="contact-info">
            <span>📍 Davis, CA</span>
            <span>📞 (530) 760-7450</span>
            {/* <a href="mailto:info@alltreecarela.com">Email Us</a> */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <br />
      <br />
      <section className="hero">
        <div className="hero__overlay">
          <div className="container hero__content">
            <p className="hero__subtitle">
              One-on-one appointments with a certified arborist
            </p>
            <h2 className="hero__title">ARBORIST CONSULTING</h2>
            <a href="#" className="btn btn--secondary">
              CONTACT US
            </a>
          </div>
        </div>
        <div className="hero__arrows">
          <span>←</span>
          <span>→</span>
        </div>
      </section>

      {/* Services Icons */}
      <section className="services-icons">
        <div className="container">
          <div className="services-icons__grid">
            <div className="service-item">
              <div className="icon-circle">
                <span role="img" aria-label="consulting">
                  🌳
                </span>
              </div>
              <p>Arborist Consultations</p>
            </div>
            <div className="service-item">
              <div className="icon-circle">
                <span role="img" aria-label="tree care">
                  🌿
                </span>
              </div>
              <p>Tree Care</p>
            </div>
            <div className="service-item">
              <div className="icon-circle">
                <span role="img" aria-label="large tree">
                  🌲
                </span>
              </div>
              <p>Large Tree Management</p>
            </div>
            <div className="service-item">
              <div className="icon-circle">
                <span role="img" aria-label="certified">
                  ✅
                </span>
              </div>
              <p>Certified Arborists</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
