import React from "react";
import "./featuredContent.scss";

const FeaturedContent = () => {
  return (
    <div class="shopify-section">
      <div class="featured-content" data-section="featured-content">
        <div class="flex-grid flex-grid--no-margin">
          <div
            class="flex-grid__col--xs-12 flex-grid__col--lg-6"
            style={{ marginBottom: "30px" }}
          >
            <div class="video-wrapper">
              <iframe
                width="560"
                height="315"
                class="lozad"
                data-src="https://www.youtube.com/embed/9SKEDzaa1kI"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullscreen=""
                src="https://www.youtube.com/embed/9SKEDzaa1kI"
                data-loaded="true"
              ></iframe>
            </div>
          </div>

          <div
            class="flex-grid__col--xs-12 flex-grid__col--lg-6"
            style={{ marginBottom: "30px" }}
          >
            <a href="http://www.youtube.com/vicencolifestyle?sub_confirmation=1">
              <img
                class="lozad"
                data-src="/assets/BuildingTheBrand2_2048x.png"
                src="/assets/BuildingTheBrand2_2048x.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;
