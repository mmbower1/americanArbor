import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__overlay">
        <div className="container hero__content">
          <p className="hero__subtitle">
            One-on-one appointments with a certified arborist
          </p>
          <h2 className="hero__title">ARBORIST CONSULTING</h2>
          <a href="tel:5307607450" className="btn btn--secondary">
            CONTACT US
          </a>
        </div>
      </div>
      <div className="hero__arrows">
        <span>←</span>
        <span>→</span>
      </div>
    </section>
  );
};

export default Hero;
