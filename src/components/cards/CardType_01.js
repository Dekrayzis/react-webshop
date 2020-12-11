import React from "react";
import "./cardTypes.scss";

const CardType01 = (props) => {
  const { label, url, image, btnLabel } = props.item;
  return (
    <div className="categories_item flex-grid__col--lg-3 flex-grid__col--xs-6">
      <a href={url} className="categories_img">
        <img
          className="lozad"
          data-src={image}
          src={`/assets/${image}`}
          alt="Some"
        />
        <div className="overlay">
          <span />
        </div>
      </a>

      <div className="categories_info">
        <a href={url} className="h4">
          {btnLabel}
        </a>
        <h5>{label}</h5>
      </div>
    </div>
  );
};

export default CardType01;
