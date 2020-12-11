import React from "react";

//-- Components
import { Slider } from "../components/carousel/Carousel";
import Categories4x from "../containers/categories4/Categories4x";
import FeaturedContent from "../containers/featured/content/FeaturedContent";
import PromoTypeA from "../containers/promotion/PromoTypeA";
import { Images } from "../components/carousel/Images";

//-- Stylesheet
import "../styles/home.scss";

const Home = () => {
  return (
    <div>
      <Slider slides={Images} selector="home__carousel" />
      <Categories4x />
      <FeaturedContent />
      <PromoTypeA />
    </div>
  );
};

export default Home;
