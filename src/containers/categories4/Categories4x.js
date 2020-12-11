import React from "react";
import CardType01 from "../../components/cards/CardType_01";

//-- Stylesheet
import "./categories.scss";

const featuredProducts = [
  {
    label: "RESTOCKED NOW",
    url: "/product/legend-joggers",
    image: "Carousel_BASICSJoggers_large.webp",
    btnLabel: "LEGEND® x BUBBLICIOUS®",
  },
  {
    label: "SHOP NOW",
    url: "/product/legend-bubblicious",
    image: "Legend_Bubblicious_Carousel_large.webp",
    btnLabel: "VICENCO 'BASICS' APPAREL",
  },
  {
    label: "SHOP NOW",
    url: "/product/backpack",
    image: "Backpack_Carousel_large.webp",
    btnLabel: "VICENCO NYLON BACKPACK",
  },
  {
    label: "SHOP NOW",
    url: "/product/legend-bcca",
    image: "BCAAV2Carousel_large.webp",
    btnLabel: "VICENCO BCAA",
  },
];

const Categories4x = () => {
  const renderProducts = () => {
    return featuredProducts.map((item, idx) => (
      <CardType01 key={idx} item={item} />
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

export default Categories4x;
