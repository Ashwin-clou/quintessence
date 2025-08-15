import React from "react";
import "./About.css";
import aboutImage from "./images/about-us.jpg";
import border from "./images/m-1.png";

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Quintessence Search Labs</h1>
        <img src={border} alt="Decorative border" className="border-img" />
      </header>

      <section className="about-intro">
        <p>
          <strong>Quintessence Search Labs (QSL)</strong> is a global leader in digital transformation and engineering solutions. We specialize in empowering enterprises to embrace new technologies, overcome complex digital challenges, and foster ongoing innovation.
        </p>
        <p>
          Founded on the principles of excellence, collaboration, and customer-centricity, QSL partners with organizations across industries to help them navigate the fast-paced digital landscape and achieve measurable business outcomes.
        </p>
      </section>

      <section className="about-mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To accelerate technology adoption and digital evolution for enterprises by delivering innovative, high-quality engineering solutions and strategic consulting.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To be the trusted partner driving the future of digital innovation globally, enabling our clients to stay ahead in a rapidly changing technology ecosystem.
          </p>
        </div>
      </section>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Client-Centricity:</strong> We prioritize our clients’ success in every engagement.</li>
          <li><strong>Integrity:</strong> We build trust through transparency and accountability.</li>
          <li><strong>Innovation:</strong> We embrace creativity and continuous improvement.</li>
          <li><strong>Collaboration:</strong> We work closely with clients as partners.</li>
          <li><strong>Quality:</strong> We deliver excellence through rigorous standards.</li>
        </ul>
      </section>

      <section className="about-services">
        <h2>Our Services</h2>
        <p>
          QSL offers an integrated portfolio of services designed to support the entire digital transformation lifecycle:
        </p>
        <ul>
          <li><strong>Strategic IT Consulting:</strong> Aligning technology initiatives with business goals to maximize ROI.</li>
          <li><strong>Customer Experience (CX) Design:</strong> Crafting intuitive, engaging digital experiences that delight users.</li>
          <li><strong>Custom Software Development:</strong> Building scalable, secure applications tailored to unique business needs.</li>
          <li><strong>System Integration:</strong> Ensuring seamless connectivity between disparate IT systems for unified workflows.</li>
          <li><strong>Ongoing Support & Maintenance:</strong> Providing reliable support and continuous improvements post-launch.</li>
        </ul>
      </section>

      <section className="about-approach">
        <h2>Our Approach</h2>
        <p>
          At QSL, we see ourselves as an extension of your team. Our approach is built on deep collaboration, agile delivery, and continuous innovation. We focus on understanding your unique challenges and objectives to create tailored solutions that deliver measurable impact.
        </p>
        <p>
          By combining strategic insight, engineering excellence, and customer-centric design, we help organizations transform not just technology but their entire business model.
        </p>
      </section>

      <section className="about-clients">
        <h2>Who We Serve</h2>
        <p>
          Our expertise spans multiple industries including Financial Services, Healthcare, Retail & eCommerce, Manufacturing, Energy, and Technology. We partner with startups, mid-sized firms, and large enterprises worldwide to deliver solutions that power growth and innovation.
        </p>
      </section>

      <section className="about-image-section">
        <img src={aboutImage} alt="Quintessence Search Labs team" />
      </section>
    </div>
  );
}

export default About;
