import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Arrow = ({ direction, handleClick }) => (
  <div
    className="arrow"
    onClick={handleClick}
    style={{
      [direction]: `25px`,
    }}
  >
    {direction === "right" ? (
      <FaChevronRight
        style={{
          transform: `translateX(${direction === "left" ? "-2" : "2"}px)`,
        }}
      />
    ) : (
      <FaChevronLeft
        style={{
          transform: `translateX(${direction === "left" ? "-2" : "2"}px)`,
        }}
      />
    )}
  </div>
);

export default Arrow;
