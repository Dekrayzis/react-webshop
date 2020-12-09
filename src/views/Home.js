import React from "react";

//-- Components
import Carousel from "../components/carousel/Carousel";
import Categories_x4 from "../containers/categories4/Categories_x4";
import FeaturedContent from "../containers/featured/content/FeaturedContent";
import PromoType_A from "../containers/promotion/PromoType_A";
import SubscribeForm from "../containers/subscribe/SubscribeForm";

//-- Stylesheet
import "../styles/home.scss";

const Home = () => {
  return (
    <div>
      <Carousel selector="home__carousel" />
      <Categories_x4 />
      <FeaturedContent />
      <PromoType_A />
      <SubscribeForm />
    </div>
  );
};

export default Home;
