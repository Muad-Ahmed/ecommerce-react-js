import React, { useEffect, useRef, useState } from "react";
import { FaUserPlus } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

function BtmHeader({ categoriesList }) {
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const location = useLocation();

  const listRef = useRef(null);

  useEffect(() => {
    setIsCategoryOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    const onClickOutside = (e) => {
      if (isCategoryOpen && !listRef.current.contains(e.target)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [isCategoryOpen]);

  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Accessories", link: "/accessories" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) =>
        setCategories(
          data.filter((category) => categoriesList.includes(category.slug))
        )
      );
  }, []);

  return (
    <div className="btm-header">
      <div className="container">
        <nav className="nav">
          <div className="category-nav" ref={listRef}>
            <div
              className="category-btn"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <TiThMenu />
              <p>Browse Category</p>
              <MdOutlineArrowDropDown />
            </div>

            <div
              className={`category-nav-list ${isCategoryOpen ? "active" : ""}`}
            >
              {categories.map((category) => (
                <Link to={`category/${category.slug}`} key={category.slug}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-links">
            {navLinks.map((item) => (
              <li
                key={item.link}
                className={location.pathname === item.link ? "active" : ""}
              >
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </div>
        </nav>
        <div className="sign-regs-icon">
          <Link to="/">
            {" "}
            <PiSignInBold />{" "}
          </Link>
          <Link to="/">
            {" "}
            <FaUserPlus />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BtmHeader;
