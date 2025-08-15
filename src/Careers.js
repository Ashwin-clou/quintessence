import React from "react";
import "./Careers.css";


const Careers = () => {
  return (
    
    <div className="careers-container">
      {/* Page Header */}
      <header>
        <h1 className="careers-title">Careers at Quintessence Search Labs</h1>
        <p className="careers-subtitle">Connecting Talent with Opportunity</p>
      </header>
      

      {/* Intro Section */}
      <section className="careers-section">
        <p>
          At <strong>Quintessence Search Labs</strong>, we specialize in bridging
          the gap between talented professionals and the organizations that need them.
          Our clients trust us to find the right candidates for their open positions,
          and we trust skilled individuals like you to help us meet that goal.
        </p>
        <p>
          Whether you are an experienced professional or just starting your career,
          we believe the right opportunity can transform your future.
        </p>
      </section>

      {/* Why Work Through Us */}
      <section className="careers-section">
        <h2>Why Work Through Us?</h2>
        <ul>
          <li>Exclusive opportunities with top companies.</li>
          <li>Faster hiring decisions via our client network.</li>
          <li>Personalized guidance to make your profile shine.</li>
          <li>Ongoing support from application to final offer.</li>
        </ul>
      </section>

      {/* How We Work */}
      <section className="careers-section">
        <h2>How We Work</h2>
        <p>
          When a client shares a requirement, we search our talent pool for the
          right fit. If you have the skills they need, we will contact you
          directly and guide you through the hiring process.
        </p>
        <p>
          Even if there are no openings today, your profile could be exactly
          what a client needs tomorrow.
        </p>
      </section>

      {/* Who We’re Looking For */}
      <section className="careers-section">
        <h2>Who We’re Looking For</h2>
        <ul>
          <li>Information Technology (Developers, Analysts, QA, etc.)</li>
          <li>Sales & Marketing</li>
          <li>Human Resources & Administration</li>
          <li>Finance & Accounting</li>
          <li>Operations & Supply Chain</li>
          <li>Engineering & Technical Roles</li>
        </ul>
      </section>

      {/* Apply Section */}
      <section className="careers-section apply-box">
        <h2>Submit Your Resume</h2>
        <p>If you are interested in being considered for future opportunities:</p>
        <ol>
          <li>Email your CV to <strong>info@quintessencesearchlabs.in</strong></li>
          <li>
            Mention your <strong>area of expertise</strong> and{" "}
            <strong>preferred job location</strong>.
          </li>
          <li>If a matching role comes up, we will contact you immediately.</li>
        </ol>
      </section>

      {/* Hiring Image Section */}
      <div className="careers-hiring-section"></div>
    </div>
  );
};

export default Careers;
