import React from "react";
import { FaPoll } from "react-icons/fa";
import "../styles/product.scss";
import Purchasebar from "../components/purchasebar/Purchasebar";

const color = "#ea0029";

const Product = () => {
  return (
    <div className="shopify-section">
      <div className="product_details">
        <div
          className="cross_area supplimentCross"
          style={{ backgroundColor: `${color}` }}
        >
          <img src="/assets/cross-logoimg.svg" alt="Logo" />
        </div>
        <div className="container">
          <div className="four-fifths xl-down--nine-tenths auto md--four-fifths sm--one-whole sm-down--one-whole">
            <div className="flex-grid">
              <div className="flex-grid__col--xs-12 flex-grid__col--sm-6 flex-grid__col--xl-7">
                <div className="main_slider desktop-slider">
                  <ul>
                    <li>
                      <img
                        id="ProductPhotoImg"
                        data-slider="/assets/products/Legend_SONIC.png"
                        src="/assets/products/Legend_SONIC.png"
                        alt="VICENCO LEGEND® x SONIC® pre workout"
                      />
                    </li>
                  </ul>

                  <div className="bx-pager">
                    <a
                      data-alttext="VICENCO LEGEND® x SONIC® pre workout"
                      data-slide-index="0"
                      href={(e) => e.preventDefault()}
                      data-options="30 Servings,SONIC® Cherry Limeade,"
                      className="active"
                    >
                      <img
                        data-mainimg="/assets/products/Legend_SONIC.png"
                        src="/assets/products/Legend_SONIC_100x.png"
                        alt="VICENCO LEGEND® x SONIC® pre workout"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex-grid__col--xs-12 flex-grid__col--sm-6 flex-grid__col--xl-5">
                <div className="product_info product-detail-info">
                  <div>
                    <div className="product_tag">PRE-WORKOUT</div>
                    <h1 id="mainProdTitle">
                      <span>
                        <img
                          src="/assets/dark-logo.svg"
                          className="titleLogo"
                          alt="Logo"
                        />
                      </span>
                      LEGEND
                      <sup className="hide">®</sup> x SONIC<sup>®</sup>
                    </h1>

                    <div className="short_desc">
                      <p>
                        After a year of trial and error with the SONIC® team
                        (and A TON of “R&amp;D” trips to America’s Favorite
                        Drive-In) we are so stoked to drop the best, and only
                        official SONIC® Cherry Limeade.
                      </p>
                    </div>

                    <div className="product-badges"></div>

                    <div className="nutriDiv">
                      <span className="nut_facts">
                        <FaPoll /> View Supplement Facts
                      </span>
                    </div>

                    <div id="nut_facts">
                      <span className="close"></span>
                      <div className="nuts_img" id="nutrition_img_show">
                        <img
                          src="/assets/products/SFPLegendSONIC.png"
                          alt="VICENCO LEGEND X SONIC pre workout Supplement Facts"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Purchasebar />
      {/* Details */}
      <div className="container">
        <div className="four-fifths lg-down--one-whole auto">
          <div id="product_desc">
            <div className="flex-grid flex-grid--space">
              <div className="flex-grid__col--lg-5 flex-grid__col--sm-5 flex-grid__col--xs-12">
                <div className="description">
                  <div className="section_title">Product Description</div>
                  <h2 className="hiddenProdTitle">
                    Because There's Nothing Better, Than The Real Thing...
                  </h2>
                  <div className="mainDesc">
                    <p>
                      Since the dawn of pre-workout, this industry has released
                      cherry limeade flavors saying they “taste like SONIC®
                      Cherry Limeade” but no one ever thought or took the time
                      to call and collaborate on the REAL thing...except
                      VICENCO®. After a year of trial and error with the SONIC®
                      team (and A TON of “R&amp;D” trips to America’s Favorite
                      Drive-In) we are so stoked to drop the best, and only
                      official SONIC® Cherry Limeade.
                    </p>
                    <ul>
                      <li>
                        <span>VICENCO</span>® Full Disclosure Label
                      </li>
                    </ul>
                    <ul>
                      <li>4G L-Citrulline per scoop</li>
                    </ul>
                    <ul>
                      <li>Beta Alanine</li>
                    </ul>
                    <ul>
                      <li>Alpha-GPC</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex-grid__col--lg-5 flex-grid__col--sm-6 flex-grid__col--xs-12">
                <div className="desc_img">
                  <img
                    src="/assets/products/SONIC_Action.png"
                    alt="VICENCO LEGEND<sup>®</sup> x SONIC<sup>®</sup> pre workout"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
