import React from "react";
import { Link } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import { FaTimesCircle } from "react-icons/fa";
import "./checkout.css";

function CheckoutCancel() {
    return (
        <PageTransition>
            <div className="checkout-result">
                <div className="result-card cancel">
                    <FaTimesCircle className="result-icon cancel-icon" />
                    <h1>Payment Cancelled</h1>
                    <p>
                        Your payment was not processed. Your cart has been saved — feel free
                        to complete your purchase whenever you&apos;re ready.
                    </p>
                    <Link to="/cart" className="btn result-btn">
                        Back to Cart
                    </Link>
                </div>
            </div>
        </PageTransition>
    );
}

export default CheckoutCancel;
