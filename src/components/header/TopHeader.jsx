import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import "./header.css";
import { CartContext } from "../contexts/CartContext";
import SearchBox from "./SearchBox";

function TopHeader() {
  const { cartItems, favorites } = useContext(CartContext);

  return (
    <div className="top-header">
      <div className="container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" />
        </Link>

        <SearchBox />

        <div className="header-icons">
          <div className="icon">
            <Link to="/favorites">
              <FaRegHeart />
              <span className="count">{favorites.length}</span>
            </Link>
          </div>
          <div className="icon">
            <Link to="/cart">
              <TiShoppingCart />
              <span className="count">{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
