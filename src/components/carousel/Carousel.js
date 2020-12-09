import React from "react";
import "./carousel.scss";

const data = [
  {
    id: 0,
    image: "/assets/Sportiqe_SZN5_Banner_6b.png",
    url: "",
  },
];

const Carousel = (props) => {
  const { selector } = props;
  return (
    <div className={`carousel ${selector ? selector : null}`}>
      {data.map((item) => (
        <Slide key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Carousel;

const Slide = ({ item }) => {
  const { image } = item;
  return (
    <div className="slide" style={{ backgroundImage: `url(${image})` }}></div>
  );
};
