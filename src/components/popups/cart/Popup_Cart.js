import React from "react";
import "./popupCart.scss";

const Popup_Cart = ({ isOpen }) => {
  return (
    <div class={`shopping-cart headerPopup ${isOpen ? "open" : null} `}>
      <div id="CartContainer">
        <p>Your cart is currently empty.</p>
      </div>
    </div>
  );
};

export default Popup_Cart;
