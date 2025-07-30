import React from "react";
import {
  FaBullseye,
  FaRocket,
  FaHandsHelping,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./aboutUs.css";

const AboutUs = () => {
  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "50K+", label: "Satisfied Customers" },
    { number: "1000+", label: "Diverse Products" },
    { number: "24/7", label: "Technical Support" },
  ];

  const values = [
    {
      icon: <FaBullseye size={32} />, // Premium Quality
      title: "Premium Quality",
      description:
        "We are committed to delivering top-notch products with high quality and competitive pricing to ensure full customer satisfaction.",
    },
    {
      icon: <FaRocket size={32} />, // Continuous Innovation
      title: "Continuous Innovation",
      description:
        "We stay up-to-date with the latest tech developments and offer innovative solutions that meet our customers’ evolving needs.",
    },
    {
      icon: <FaHandsHelping size={32} />, // Customer Service
      title: "Customer Service",
      description:
        "Our customers are our top priority. We provide an exceptional shopping experience backed by continuous technical support.",
    },
  ];

  const team = [
    {
      name: "Ahmed Mohamed",
      position: "Chief Executive Officer",
      photo: "/team-1.jpg",
      social: {
        linkedin: <FaLinkedinIn />,
        twitter: <FaTwitter />,
        email: <FaEnvelope />,
      },
    },
    {
      name: "Sameer Ahmed",
      position: "Marketing Director",
      photo: "/team-2.jpg",
      social: {
        linkedin: <FaLinkedinIn />,
        twitter: <FaTwitter />,
        email: <FaEnvelope />,
      },
    },
    {
      name: "Mohamed Ali",
      position: "Technical Director",
      photo: "/team-3.jpg",
      social: {
        linkedin: <FaLinkedinIn />,
        twitter: <FaTwitter />,
        email: <FaEnvelope />,
      },
    },
    {
      name: "Salem Hassan",
      position: "Customer Service Manager",
      photo: "/team-4.jpg",
      social: {
        linkedin: <FaLinkedinIn />,
        twitter: <FaTwitter />,
        email: <FaEnvelope />,
      },
    },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "Address",
      info: "King Fahd Street, Riyadh, Saudi Arabia",
    },
    {
      icon: <FaPhoneAlt size={24} />,
      title: "Phone",
      info: "+966 50 123 4567",
    },
    {
      icon: <FaEnvelope size={24} />,
      title: "Email",
      info: "info@company.com",
    },
  ];

  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>
            We are a leading e-commerce company specializing in providing the
            best tech and electronic products with guaranteed quality and
            reliability in every item we offer.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Our journey began in 2014 as a small store focused on selling
              electronics. Over the years, we have evolved into one of the
              region’s largest e-commerce platforms, offering thousands of
              diverse products to our valued customers.
            </p>
            <p>
              We strongly believe in the power of technology to improve lives.
              That’s why we’re committed to offering the latest tech products at
              competitive prices and high quality. Our dedicated team works
              tirelessly to deliver an exceptional shopping experience.
            </p>
            <p>
              Our vision is to be the trusted partner for our customers on their
              digital journey, providing everything they need in tech products
              and outstanding services.
            </p>
          </div>
          <div className="about-image">
            <img src="/ourStory-img.jpg" alt="Team" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div
            className="values-intro"
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            <h2>Our Values</h2>
            <p
              style={{
                fontSize: "1.1rem",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              We uphold these core values in everything we do to ensure the best
              service for our customers.
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div
            className="team-intro"
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            <h2>Meet the Team</h2>
            <p
              style={{
                fontSize: "1.1rem",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Meet the talented team behind the scenes delivering the best
              services to you.
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-member">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="team-photo"
                />
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <p>{member.position}</p>
                  <div className="team-social">
                    <a href={member.social.linkedin} title="LinkedIn">
                      {member.social.linkedin}
                    </a>
                    <a href={member.social.twitter} title="Twitter">
                      {member.social.twitter}
                    </a>
                    <a href={`mailto:${member.social.email}`} title="Email">
                      {member.social.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2>Contact Us</h2>
          <p
            style={{
              fontSize: "1.1rem",
              maxWidth: "600px",
              margin: "20px auto 0",
            }}
          >
            We’re here to answer all your inquiries and provide the support you
            need.
          </p>
          <div className="contact-info">
            {contactInfo.map((contact, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">{contact.icon}</div>
                <div className="contact-details">
                  <h4>{contact.title}</h4>
                  <p>{contact.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
