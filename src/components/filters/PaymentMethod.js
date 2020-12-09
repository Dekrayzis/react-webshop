import React from "react";
import "./filters.scss";
import Switch from "../elements/switch/Switch";

const PaymentMethod = ({ priceToggle }) => {
  return (
    <div class="point_toggle">
      <div class="switchLabel">
        <span class="cashS">cash</span>
        <Switch callBack={priceToggle} />
        <span class="pointS">points</span>
      </div>
    </div>
  );
};

export default PaymentMethod;
