import React, { useContext } from "react";
import {
  FaRegHeart,
  FaRegStarHalfStroke,
  FaShare,
  FaStar,
} from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../../components/contexts/CartContext";
import toast from "react-hot-toast";

function ProductInfo({ product }) {
  const { cartItems, handleAddToCart, favorites, addToFav, removeFromFav } =
    useContext(CartContext);

  const isInCart = cartItems.some((i) => i.id === product.id);
  const isInFav = favorites.some((i) => i.id === product.id);

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
    <div className="details-item">
      <h1 className="name">{product.title}</h1>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
      </div>

      <p className="price">$ {product.price}</p>

      <h5>
        Availability: <span>{product.availabilityStatus}</span>
      </h5>
      <h5>
        Brand: <span>{product.brand}</span>
      </h5>
      <p className="desc">{product.description}</p>
      <h5 className="stock">
        <span>Hurry Up! Only {product.stock} products left in stock.</span>
      </h5>

      <button
        className={`btn ${isInCart ? "in-cart" : ""}`}
        onClick={() => handleAddToCart(product)}
      >
        {isInCart ? "Item In Cart" : "Add To Cart"} <TiShoppingCart />
      </button>

      <div className="icons">
        <span
          className={isInFav ? "in-fav" : ""}
          onClick={() => handleAddToFav(product)}
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

export default ProductInfo;
