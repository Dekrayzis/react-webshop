import React from "react";
import "./popupCart.scss";

const PopupCart = ({ isOpen }) => {
  return (
    <div className={`shopping-cart headerPopup ${isOpen ? "open" : null} `}>
      <div id="CartContainer">
        <p>Your cart is currently empty.</p>
      </div>
    </div>
  );
};

export default PopupCart;
