import React from "react";
import {
  FaHeadphonesAlt,
  FaMobileAlt,
  FaLaptop,
  FaChargingStation,
  FaBluetooth,
  FaShieldAlt,
} from "react-icons/fa";
import "./accessories.css";

const featuredAccessories = [
  {
    icon: <FaHeadphonesAlt size={28} />,
    title: "Headphones",
    desc: "High-quality sound and comfort for music lovers.",
    img: " https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=400&h=340&fit=crop&crop=faces",
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: "Phone Cases",
    desc: "Durable and stylish cases for all phone models.",
    img: " https://images.unsplash.com/photo-1612247905736-c283f684cd55?w=400&h=340&fit=crop&crop=faces",
  },
  {
    icon: <FaLaptop size={28} />,
    title: "Laptop Bags",
    desc: "Protective and modern bags for your devices.",
    img: "https://images.unsplash.com/photo-1721800419598-67f296c67b79?w=400&h=340&fit=crop&crop=faces",
  },
  {
    icon: <FaChargingStation size={28} />,
    title: "Chargers",
    desc: "Fast and reliable charging solutions.",
    img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=340&fit=crop&crop=faces",
  },
  {
    icon: <FaBluetooth size={28} />,
    title: "Bluetooth Devices",
    desc: "Latest wireless technology accessories.",
    img: "https://images.unsplash.com/photo-1588318312727-e210fcd11464?w=400&h=340&fit=crop&crop=faces",
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Screen Protectors",
    desc: "Crystal-clear and tough screen protection.",
    img: "https://images.unsplash.com/photo-1464380573004-8ca85a08751a?w=400&h=340&fit=crop&crop=faces",
  },
];

const Accessories = () => {
  return (
    <div className="accessories-page">
      {/* Hero Section */}
      <section className="accessories-hero">
        <div className="container">
          <h1>Accessories</h1>
          <p>
            Discover our wide range of high-quality tech accessories designed to
            enhance your devices and lifestyle.
          </p>
        </div>
      </section>

      {/* About Accessories */}
      <section className="container">
        <div className="accessories-content">
          <div className="accessories-text">
            <h2>Why Choose Our Accessories?</h2>
            <p>
              We offer a curated selection of the latest and most reliable
              accessories for your smartphones, laptops, and more. Our products
              are tested for quality and durability, ensuring you get the best
              value for your money.
            </p>
            <p>
              Whether you need protection, style, or enhanced functionality, our
              accessories collection has something for everyone.
            </p>
          </div>
          <div className="accessories-image">
            <img
              src="https://images.unsplash.com/photo-1563549054059-bf4ebe2f49d5?w=600&h=340&fit=crop&crop=faces"
              alt="Accessories"
            />
          </div>
        </div>
      </section>

      {/* Featured Accessories */}
      <section className="featured-accessories-section">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: 40 }}>
            Featured Accessories
          </h2>
          <div className="featured-grid">
            {featuredAccessories.map((item, idx) => (
              <div className="featured-item" key={idx}>
                <div className="featured-icon">{item.icon}</div>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: 120,
                    objectFit: "cover",
                    borderRadius: 10,
                    marginBottom: 14,
                  }}
                />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accessories;
