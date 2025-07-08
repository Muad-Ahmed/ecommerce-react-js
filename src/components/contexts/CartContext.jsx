import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext({});

export default function CartProvider({ children }) {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(getSavedCart());
  const [favorites, setFavorites] = useState(getSavedFav());

  function getSavedCart() {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  }

  function getSavedFav() {
    const savedFav = localStorage.getItem("favoritesItems");
    return savedFav ? JSON.parse(savedFav) : [];
  }

  const addToFav = (item) => {
    setFavorites((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  useEffect(() => {
    localStorage.setItem("favoritesItems", JSON.stringify(favorites));
  }, [favorites]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
  };

  const handleAddToCart = (item) => {
    addToCart(item);

    toast.success(
      <div className="toast-wrapper">
        <img src={item.images[0]} alt="" className="toast-img" />
        <div className="toast-content">
          <strong>{item.title}</strong>
          added to Cart
          <div>
            <button className="btn" onClick={() => navigate("/Cart")}>
              View Cart
            </button>
          </div>
        </div>
      </div>,
      { duration: 3500 }
    );
  };

  const changQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
  };

  const removeFromFav = (item) => {
    setFavorites((prevItems) => prevItems.filter((i) => i.id !== item.id));
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAddToCart,
        changQuantity,
        removeFromCart,
        removeFromFav,
        addToFav,
        favorites,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
