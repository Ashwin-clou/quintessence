import React from "react";
import "./Services.css";
import border from "./images/m-1.png";

function Services() {
    return (
        <div className="content-container">
            <div className="about-title slideInDown">
                <h2>Our Services</h2>
            </div>
            <div id="border-img">
                <img src={border} alt="divider" />
            </div>
            <p className="services-subtitle">
                We provide innovative IT consulting solutions to help your business grow, stay secure, and remain competitive.
            </p>

            <div className="services-grid">
                <div className="service-card">
                    <div className="icon diamond"><i className="fas fa-shield-alt"></i></div>
                    <h3>Cyber Security</h3>
                    <p>Protect your business from online threats with advanced security monitoring and proactive risk management.</p>
                </div>

                <div className="service-card">
                    <div className="icon diamond"><i className="fas fa-chart-line"></i></div>
                    <h3>Data Analytics</h3>
                    <p>Unlock the power of your data to make smarter decisions using AI-driven analytics and dashboards.</p>
                </div>

                <div className="service-card">
                    <div className="icon diamond"><i className="fas fa-code"></i></div>
                    <h3>Web Development</h3>
                    <p>Build responsive, scalable, and secure websites that deliver outstanding user experiences.</p>
                </div>

                <div className="service-card">
                    <div className="icon diamond"><i className="fas fa-mobile-alt"></i></div>
                    <h3>App Development</h3>
                    <p>Develop mobile apps that enhance your customer engagement and business productivity.</p>
                </div>

                <div className="service-card">
                    <div className="icon diamond"><i className="fas fa-search"></i></div>
                    <h3>SEO Optimization</h3>
                    <p>Improve your online visibility and search engine rankings with proven SEO strategies.</p>
                </div>

                <div className="quote-box">
                    <h3>Call Us For a Quote</h3>
                    <p>Let’s discuss how our IT solutions can transform your business.</p>
                    <h2>+91 81234 56789</h2>
                </div>
            </div>
        </div>
    );
}

export default Services;
