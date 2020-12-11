import React from "react";
import "./filters.scss";
import Switch from "../elements/switch/Switch";

const PaymentMethod = ({ priceToggle }) => {
  return (
    <div className="point_toggle">
      <div className="switchLabel">
        <span className="cashS">cash</span>
        <Switch callBack={priceToggle} />
        <span className="pointS">points</span>
      </div>
    </div>
  );
};

export default PaymentMethod;
