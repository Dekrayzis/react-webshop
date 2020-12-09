import React from "react";
import "./categories.scss";
import CardType_01 from "../../components/cards/CardType_01";

const featuredProducts = [
  {
    label: "RESTOCKED NOW",
    url: "",
    image: "Carousel_BASICSJoggers_large.webp",
    btnLabel: "LEGEND® x BUBBLICIOUS®",
  },
  {
    label: "SHOP NOW",
    url: "",
    image: "Legend_Bubblicious_Carousel_large.webp",
    btnLabel: "vicenco® 'BASICS' APPAREL",
  },
  {
    label: "SHOP NOW",
    url: "",
    image: "Backpack_Carousel_large.webp",
    btnLabel: "vicenco® NYLON BACKPACK",
  },
  {
    label: "SHOP NOW",
    url: "",
    image: "BCAAV2Carousel_large.webp",
    btnLabel: "vicenco® BCAA",
  },
];

const Categories_x4 = () => {
  const renderProducts = () => {
    return featuredProducts.map((item) => (
      <CardType_01 key={item.id} item={item} />
    ));
  };

  return (
    <section className="categories" data-section="featured-products">
      <div className="categories_list flex-grid flex-grid--no-margin">
        {renderProducts()}
      </div>
    </section>
  );
};

export default Categories_x4;
