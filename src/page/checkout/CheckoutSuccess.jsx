import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../components/contexts/CartContext";
import PageTransition from "../../components/PageTransition";
import { FaCheckCircle } from "react-icons/fa";
import "./checkout.css";

function CheckoutSuccess() {
    const { clearCart } = useContext(CartContext);

    useEffect(() => {
        clearCart();
    }, []);

    return (
        <PageTransition>
            <div className="checkout-result">
                <div className="result-card success">
                    <FaCheckCircle className="result-icon success-icon" />
                    <h1>Payment Successful!</h1>
                    <p>
                        Thank you for your order. A confirmation email will be sent to you
                        shortly.
                    </p>
                    <Link to="/" className="btn result-btn">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </PageTransition>
    );
}

export default CheckoutSuccess;
