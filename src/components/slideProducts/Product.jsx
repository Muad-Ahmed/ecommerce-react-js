import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { FaStar, FaRegStarHalfStroke, FaCheck } from "react-icons/fa6";
import { FaCartArrowDown, FaRegHeart, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Product({ item }) {
  const { cartItems, favorites, handleAddToCart, addToFav, removeFromFav } =
    useContext(CartContext);

  const isInCart = cartItems.some((i) => i.id === item.id);
  const isInFav = favorites.some((i) => i.id === item.id);

  const handleAddToFav = (item) => {
    if (isInFav) {
      removeFromFav(item);
      toast.error(`${item.title} Removed from favorites`);
    } else {
      addToFav(item);
      toast.success(`${item.title} Add to favorites`);
    }
  };

  return (
    <div className={`product ${isInCart ? "in-cart" : ""}`}>
      <Link to={`/products/${item.id}`}>
        <span className="cartState">
          <FaCheck /> in cart
        </span>
        <div className="img-product">
          <img src={item.images[0]} alt="Product image" />
        </div>
        <p className="name-product">{item.title}</p>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStarHalfStroke />
        </div>
        <p className="price">
          <span>$ {item.price}</span>
        </p>
      </Link>
      <div className="icons">
        <span className="cartBtn" onClick={() => handleAddToCart(item)}>
          <FaCartArrowDown />
        </span>
        <span
          className={isInFav ? "in-fav" : ""}
          onClick={() => handleAddToFav(item)}
        >
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default Product;
