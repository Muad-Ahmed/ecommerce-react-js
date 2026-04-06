import React, { useContext, useState } from "react";
import { CartContext } from "../../components/contexts/CartContext";
import { FaTrashAlt, FaShoppingCart } from "react-icons/fa";
import "./cart.css";
import PageTransition from "../../components/PageTransition";
import toast from "react-hot-toast";

function Cart() {
  const { cartItems, changeQuantity, removeFromCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const total = +cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;

    setLoading(true);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cartItems,
          successUrl: `${window.location.origin}/checkout/success`,
          cancelUrl: `${window.location.origin}/checkout/cancel`,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Checkout failed");

      window.location.href = data.url;
    } catch (err) {
      toast.error(err.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="checkout">
        <div className="order-summary">
          <h1>Order Summary</h1>

          <div className="items">
            {cartItems.length === 0 ? (
              <p className="empty-cart">Your cart is empty.</p>
            ) : (
              cartItems.map((item, index) => (
                <div className="cart-item" key={index}>
                  <div className="details">
                    <div className="image">
                      <img src={item.images[0]} alt="" />
                    </div>

                    <div className="content">
                      <h4>{item.title}</h4>
                      <p className="item-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <div className="quantity-control">
                        <button onClick={() => changeQuantity(item.id, -1)}>
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button onClick={() => changeQuantity(item.id, +1)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="delete-item"
                    onClick={() => removeFromCart(item)}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="bottom-summary">
            <div className="shop-table">
              <p>Total: </p>
              <span className="total-checkout">${total}</span>
            </div>
            <div className="button-div">
              <button
                type="button"
                onClick={handleCheckout}
                disabled={loading || cartItems.length === 0}
                className={loading ? "loading" : ""}
              >
                {loading ? (
                  <span className="spinner-wrapper">
                    <span className="spinner" />
                    Redirecting...
                  </span>
                ) : (
                  <span className="checkout-btn-label">
                    <FaShoppingCart />
                    Proceed to Checkout
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Cart;
