import React from "react";
import "./cardTypes.scss";

const CardType_01 = (props) => {
  const { label, url, image, btnLabel } = props.item;
  return (
    <div class="categories_item flex-grid__col--lg-3 flex-grid__col--xs-6">
      <a href={url} class="categories_img">
        <img class="lozad" data-src={image} src={`/assets/${image}`} />
        <div class="overlay">
          <span />
        </div>
      </a>

      <div class="categories_info">
        <a href={url} class="h4">
          {btnLabel}
        </a>
        <h5>{label}</h5>
      </div>
    </div>
  );
};

export default CardType_01;
