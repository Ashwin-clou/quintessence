import React, { useRef } from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
import contactBg from "./images/contact-bg.jpg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Set {{time}} for EmailJS template
    const timeInput = form.current.querySelector('input[name="time"]');
    if (timeInput) {
      timeInput.value = new Date().toLocaleString();
    }

    emailjs
      .sendForm(
        "service_uwtka7h", // Service ID
        "template_p3rkhdp", // Template ID
        form.current,
        "MZMvDnTuHmHuRYmfj" // Public Key
      )
      .then(
        () => {
          alert("Thank you for contacting Quintessence Search Lab!");
          e.target.reset();
          window.location.href = "/"; // Redirect to homepage
        },
        (error) => {
          console.error("❌ Failed to send email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-page">
      <h5 className="contact-subtitle">CONTACT US</h5>
      <h2 className="contact-title">
        If You Have Any Query, Feel Free To Contact Us
      </h2>

      <div className="contact-info">
        <div className="contact-item">
          <div className="contact-icon">
            <FaPhoneAlt color="#fff" size={24} />
          </div>
          <p className="contact-text">Call to ask any question</p>
          <a href="tel:+0123456789" className="contact-link">
            +012 345 6789
          </a>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <FaEnvelope color="#fff" size={24} />
          </div>
          <p className="contact-text">Email to get free quote</p>
          <a
            href="mailto:info@quintessencesearchlabs.in"
            className="contact-link"
          >
            info@quintessencesearchlabs.in
          </a>
        </div>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        id="contactForm"
        className="contact-form"
      >
        <input type="text" name="title" placeholder="Subject" required />
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>

        {/* Hidden input for {{time}} */}
        <input type="hidden" name="time" />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
