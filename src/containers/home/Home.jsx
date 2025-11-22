// File: src/App.tsx
import React from "react";
import "./Home.scss";
// import logo from "./assets/logo.png"; // place logo in src/assets/logo.png

// components
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="app">
      <Header />
      <br />
      <br />
      <Hero />
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
      <Footer />
    </div>
  );
};

export default Home;
