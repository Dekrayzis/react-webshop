import React, { useState, useEffect } from "react";
import "./switch.scss";

const Switch = ({ callBack }) => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
  };

  useEffect(() => {
    callBack(isToggleOn);
  }, [isToggleOn]);

  return (
    <div
      onClick={() => handleClick()}
      className={isToggleOn ? "ToggleSwitch active" : "ToggleSwitch"}
    >
      <div className="switch__indicator" />
    </div>
  );
};

export default Switch;
