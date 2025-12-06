import React from "react";
import "./About.scss";
import ISA from "../../assets/ISA-cert.png";
import signature from "../../assets/Signature.png";

// import matthewPhoto from "../assets/matthew-old.jpg";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container about-hero__content">
          <h1>About American Arbor</h1>
          <p className="subtitle">
            A father-and-son legacy of tree care in Davis since 1998
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            {/* Mike’s Portrait */}
            <div className="story-image">
              <img src={ISA} alt="Mike — Owner & Lead Arborist" />
              <div className="caption">
                Mike – ISA Certified Arborist #WE-12345A
              </div>
            </div>

            {/* Text */}
            <div className="story-text">
              <h2>From Teen to Second-Gen Owner</h2>
              <p>
                My name is <strong>Mike</strong>, and I’ve been climbing trees
                professionally since I was 15 years old.
              </p>
              <p>
                My father started American Arbor in 1980's with one truck, a
                chainsaw, and a belief that trees deserve respect. I grew up
                watching him save century-old oaks others wanted to cut down,
                and that work ethic stuck with me.
              </p>
              <p>
                In 2018, after earning my ISA Certified Arborist credential and
                working side-by-side with Dad for over a decade, I officially
                took the reins.
              </p>
              <p>
                Today, we’re still a small, family-owned company — but with more
                advanced equipment, more certifications, and the same promise
                Dad made on day one:{" "}
                <strong>
                  we treat every tree like it’s growing in our own yard.
                </strong>
              </p>

              <div className="signature">
                <img
                  src={signature}
                  alt="signature"
                  className="signature-img"
                />
                <p>
                  Mike
                  <br />
                  Owner & Lead Arborist
                </p>
              </div>
            </div>
          </div>

          {/* Father Photo – Optional */}
          {/* <div className="father-photo">
            <img alt="Matthew – Founder" />
            <p>Matthew (Dad) on a big oak removal – circa 2004</p>
          </div> */}
        </div>
      </section>

      {/* Values */}
      {/* <section className="values">
        <div className="container">
          <h2>Why Families & Property Owners Trust Us</h2>
          <div className="values-grid">
            <div className="value">
              <span className="icon">Certified Expertise</span>
              <p>
                ISA Certified Arborists on every job — never just “guys with
                chainsaws”
              </p>
            </div>
            <div className="value">
              <span className="icon">Fully Insured</span>
              <p>
                $2M liability + workers’ comp — your property is 100% protected
              </p>
            </div>
            <div className="value">
              <span className="icon">Tree Preservation First</span>
              <p>
                We save trees when possible. Removal is always the last option
              </p>
            </div>
            <div className="value">
              <span className="icon">Clean & Respectful</span>
              <p>We leave your yard cleaner than we found it — every time</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      {/* <section className="about-cta">
        <div className="container">
          <h2>Ready to give your trees the care they deserve?</h2>
          <p>Schedule your free consultation with Mike today.</p>
          <div className="cta-buttons">
            <a href="tel:5307607450" className="btn btn--primary">
              Call (530) 760-7450
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default About;
