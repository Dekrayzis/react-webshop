import React from "react";
import "./featuredContent.scss";

const FeaturedContent = () => {
  return (
    <div className="shopify-section">
      <div className="featured-content" data-section="featured-content">
        <div className="flex-grid flex-grid--no-margin">
          <div
            className="flex-grid__col--xs-12 flex-grid__col--lg-6"
            style={{ marginBottom: "30px" }}
          >
            <div className="video-wrapper">
              <iframe
                width="560"
                height="315"
                className="lozad"
                data-src="https://www.youtube.com/embed/9SKEDzaa1kI"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
                src="https://www.youtube.com/embed/9SKEDzaa1kI"
                data-loaded="true"
                title="Youtube clip"
              ></iframe>
            </div>
          </div>

          <div
            className="flex-grid__col--xs-12 flex-grid__col--lg-6"
            style={{ marginBottom: "30px" }}
          >
            <a href="http://www.youtube.com/vicencolifestyle?sub_confirmation=1">
              <img
                className="lozad"
                data-src="/assets/BuildingTheBrand2_2048x.png"
                src="/assets/BuildingTheBrand2_2048x.png"
                alt="Branding"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;
