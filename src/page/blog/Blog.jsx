import React from "react";
import { FaUser, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import "./blog.css";

const articles = [
  {
    title: "Top 5 Tech Accessories for 2024",
    author: "John Smith",
    date: "2024-05-01",
    desc: "Discover the must-have tech accessories every professional should own this year.",
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&h=180&fit=crop&crop=faces",
    link: "#",
  },
  {
    title: "How to Choose the Best Headphones",
    author: "Michael Brown",
    date: "2024-04-20",
    desc: "A comprehensive guide to picking headphones that match your style and needs.",
    img: "https://images.unsplash.com/photo-1491927570842-0261e477d937?w=600&h=180&fit=crop&crop=faces",
    link: "#",
  },
  {
    title: "Protect Your Devices: Screen Protectors Explained",
    author: "David Lee",
    date: "2024-03-15",
    desc: "Everything you need to know about keeping your screens safe and scratch-free.",
    img: "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?w=600&h=180&fit=crop&crop=faces",
    link: "#",
  },
];

const Blog = () => {
  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <h1>Blog</h1>
          <p>
            Stay updated with the latest trends, tips, and guides in the world
            of tech accessories.
          </p>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="latest-articles-section">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: 40 }}>
            Latest Articles
          </h2>
          <div className="articles-grid">
            {articles.map((article, idx) => (
              <div className="article-card" key={idx}>
                <img
                  src={article.img}
                  alt={article.title}
                  className="article-image"
                />
                <div className="article-content">
                  <div className="article-title">{article.title}</div>
                  <div className="article-meta">
                    <FaUser style={{ marginRight: 6 }} /> {article.author}{" "}
                    &nbsp; | &nbsp;
                    <FaCalendarAlt style={{ marginRight: 4 }} /> {article.date}
                  </div>
                  <div className="article-desc">{article.desc}</div>
                  <a href={article.link} className="read-more">
                    Read More <FaArrowRight style={{ marginLeft: 6 }} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
