import React from "react";
import "./carousel.scss";

const Dot = ({ active }) => (
  <span
    style={{
      padding: `10px`,
      marginRight: `5px`,
      cursor: `pointer`,
      borderRadius: `50%`,
      background: `${active ? "black" : "white"}`,
    }}
  />
);

const Dots = ({ slides, activeSlide }) => (
  <div className="dot__controls">
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeSlide === i} />
    ))}
  </div>
);

export default Dots;
