import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaCommentDots,
} from "react-icons/fa";
import "./contact.css";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt size={22} />,
    title: "Address",
    info: "King Fahd Street, Riyadh, Saudi Arabia",
  },
  {
    icon: <FaPhoneAlt size={22} />,
    title: "Phone",
    info: "+966 50 123 4567",
  },
  {
    icon: <FaEnvelope size={22} />,
    title: "Email",
    info: "info@company.com",
  },
];

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            We’re here to answer your questions and provide the support you
            need. Reach out to us anytime!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              {contactInfo.map((item, idx) => (
                <div className="contact-item" key={idx}>
                  <div className="contact-icon">{item.icon}</div>
                  <div className="info">
                    <h4>{item.title}</h4>
                    <p>{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
            <form className="contact-form">
              <label htmlFor="name">
                <FaUser style={{ marginRight: 6 }} /> Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />

              <label htmlFor="email">
                <FaEnvelope style={{ marginRight: 6 }} /> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />

              <label htmlFor="message">
                <FaCommentDots style={{ marginRight: 6 }} /> Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your Message"
                required
              />

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
