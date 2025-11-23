// src/pages/Services.tsx
import React from "react";
import "./Services.scss";

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Tree Services</h1>
          <p className="subtitle">
            ISA Certified Arborist on every job • Fully insured • Davis &
            Greater Sacramento
          </p>
        </div>
      </section>

      <div className="container services-page">
        {/* Intro */}
        <section className="services-intro">
          <p className="lead">
            We don’t just cut trees — we care for them. Every service is
            performed by or under direct supervision of an ISA Certified
            Arborist using the latest ANSI A300 standards.
          </p>
        </section>

        {/* Services Grid */}
        <section className="services-grid">
          {/* 1. Tree Trimming & Pruning */}
          <div className="service-card">
            <div className="icon">Pruning Shears</div>
            <h3>Tree Trimming & Pruning</h3>
            <p>
              Proper pruning improves tree health, structure, and appearance
              while reducing risk. We specialize in crown thinning, crown
              raising, structural pruning for young trees, and clearance pruning
              around homes and power lines.
            </p>
            <ul className="checklist">
              <li>Crown cleaning & thinning</li>
              <li>Deadwood removal</li>
              <li>Weight reduction on heavy limbs</li>
              <li>Vista & aesthetic pruning</li>
            </ul>
          </div>

          {/* 2. Tree Removal */}
          <div className="service-card">
            <div className="icon">Chainsaw</div>
            <h3>Safe Tree Removal</h3>
            <p>
              When removal is the only option (due to death, disease, storm
              damage, or construction), we use advanced rigging and (when
              needed) crane-assisted techniques to protect your property.
            </p>
            <ul className="checklist">
              <li>Technical removals near structures</li>
              <li>Crane removals for hazardous trees</li>
              <li>Complete cleanup & debris hauling</li>
            </ul>
          </div>

          {/* 3. Stump Grinding */}
          <div className="service-card">
            <div className="icon">Stump Grinder</div>
            <h3>Stump Grinding & Removal</h3>
            <p>
              We grind stumps 8–12 inches below grade so you can replant or
              re-sod immediately. All grindings are removed or backfilled upon
              request.
            </p>
          </div>

          {/* 4. Emergency Storm Response */}
          <div className="service-card emergency">
            <div className="icon">Storm</div>
            <h3>24/7 Emergency Service</h3>
            <p>
              Storms don’t wait — neither do we. Available 24/7 for fallen
              trees, hanging limbs, or any immediate hazard. Call{" "}
              <a href="tel:5307607450">(530) 760-7450</a> anytime.
            </p>
          </div>

          {/* 5. Tree Health Assessments */}
          <div className="service-card">
            <div className="icon">Magnifying Glass Leaf</div>
            <h3>Tree Health Assessments & Diagnosis</h3>
            <p>
              On-site consultation with Mike (ISA Certified Arborist) to
              identify pests, diseases, nutrient deficiencies, root issues, and
              overall risk assessment.
            </p>
          </div>

          {/* 6. Cabling & Bracing */}
          <div className="service-card">
            <div className="icon">Cable</div>
            <h3>Cabling & Bracing</h3>
            <p>
              Structural support for weak unions, split trunks, or over-extended
              limbs using industry-leading Cobra and steel cable systems.
            </p>
          </div>

          {/* 7. Planting & Transplanting */}
          <div className="service-card">
            <div className="icon">Sapling</div>
            <h3>Tree Planting & Transplanting</h3>
            <p>
              Right tree, right place. We help select California-native and
              climate-appropriate species, plant with proper technique, and
              offer transplanting services for mature trees.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="services-cta">
          <h2>Not sure what your trees need?</h2>
          <p>
            Schedule a free on-site assessment with Mike today — no obligation.
          </p>
          <div className="cta-buttons">
            <a href="tel:5307607450" className="btn btn--primary">
              Call (530) 760-7450
            </a>
            {/* <a href="/contact" className="btn btn--secondary">
              Get Free Quote
            </a> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
