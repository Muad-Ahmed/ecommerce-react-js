import React, { useContext } from "react";
import { CartContext } from "../../components/contexts/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import "./cart.css";
import PageTransition from "../../components/PageTransition";

function Cart() {
  const { cartItems, changQuantity, removeFromCart } = useContext(CartContext);

  const total = +cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  return (
    <PageTransition>
      <div className="checkout">
        <div className="order-summary">
          <h1>Order Summary</h1>

          <div className="items">
            {cartItems.length === 0 ? (
              <p>Your Cart is empty.</p>
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
                        <button onClick={() => changQuantity(item.id, -1)}>
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button onClick={() => changQuantity(item.id, +1)}>
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
              <button type="submit">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Cart;
