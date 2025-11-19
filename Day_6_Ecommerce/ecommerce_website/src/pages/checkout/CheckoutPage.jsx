import axios from "axios";

import { useState, useEffect } from "react";
import "./CheckoutPage.css";
import "./checkout-header.css";
import { Link } from "react-router";
import { PaymentSummary } from "./PaymentSummary";

export function CheckoutPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  useEffect(() => {
    const getCheckout = async () => {
      let res = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime"
      );
      setDeliveryOptions(res.data);
      res = await axios.get("/api/payment-summary");
      setPaymentSummary(res.data);
    };
    getCheckout();
  }, [cart]);
  return (
    <>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <Link className="return-to-home-link" to="/">
              3 items
            </Link>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <PaymentSummary
        paymentSummary={paymentSummary}
        deliveryOptions={deliveryOptions}
        cart={cart}
        loadCart={loadCart}
      />
    </>
  );
}
