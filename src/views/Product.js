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
          <img src="/assets/cross-logoimg.svg" />
        </div>
        <div className="container">
          <div class="four-fifths xl-down--nine-tenths auto md--four-fifths sm--one-whole sm-down--one-whole">
            <div class="flex-grid">
              <div class="flex-grid__col--xs-12 flex-grid__col--sm-6 flex-grid__col--xl-7">
                <div class="main_slider desktop-slider">
                  <ul>
                    <li>
                      <img
                        id="ProductPhotoImg"
                        data-slider="/assets/products/Legend_SONIC.png"
                        src="/assets/products/Legend_SONIC.png"
                        alt="GHOST LEGEND® x SONIC® pre workout"
                      />
                    </li>
                  </ul>

                  <div class="bx-pager">
                    <a
                      data-alttext="GHOST LEGEND® x SONIC® pre workout"
                      data-slide-index="0"
                      href="javascript:void(0);"
                      data-options="30 Servings,SONIC® Cherry Limeade,"
                      class="active"
                    >
                      <img
                        data-mainimg="/assets/products/Legend_SONIC.png"
                        src="/assets/products/Legend_SONIC_100x.png"
                        alt="GHOST LEGEND® x SONIC® pre workout"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div class="flex-grid__col--xs-12 flex-grid__col--sm-6 flex-grid__col--xl-5">
                <div class="product_info product-detail-info">
                  <div>
                    <div class="product_tag">PRE-WORKOUT</div>
                    <h1 id="mainProdTitle">
                      <span>
                        <img src="/assets/dark-logo.svg" class="titleLogo" />
                      </span>
                      LEGEND
                      <sup class="hide">®</sup> x SONIC<sup>®</sup>
                    </h1>

                    <div class="short_desc">
                      <p>
                        After a year of trial and error with the SONIC® team
                        (and A TON of “R&amp;D” trips to America’s Favorite
                        Drive-In) we are so stoked to drop the best, and only
                        official SONIC® Cherry Limeade.
                      </p>
                    </div>

                    <div class="product-badges"></div>

                    <div class="nutriDiv">
                      <span class="nut_facts">
                        <FaPoll /> View Supplement Facts
                      </span>
                    </div>

                    <div id="nut_facts">
                      <span class="close"></span>
                      <div class="nuts_img" id="nutrition_img_show">
                        <img
                          src="/assets/products/SFPLegendSONIC.png"
                          alt="GHOST LEGEND X SONIC pre workout Supplement Facts"
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
      <div class="container">
        <div class="four-fifths lg-down--one-whole auto">
          <div id="product_desc">
            <div class="flex-grid flex-grid--space">
              <div class="flex-grid__col--lg-5 flex-grid__col--sm-5 flex-grid__col--xs-12">
                <div class="description">
                  <div class="section_title">Product Description</div>
                  <h2 class="hiddenProdTitle">
                    Because There's Nothing Better, Than The Real Thing...
                  </h2>
                  <div class="mainDesc">
                    <p>
                      Since the dawn of pre-workout, this industry has released
                      cherry limeade flavors saying they “taste like SONIC®
                      Cherry Limeade” but no one ever thought or took the time
                      to call and collaborate on the REAL thing...except GHOST®.
                      After a year of trial and error with the SONIC® team (and
                      A TON of “R&amp;D” trips to America’s Favorite Drive-In)
                      we are so stoked to drop the best, and only official
                      SONIC® Cherry Limeade.
                    </p>
                    <ul>
                      <li>
                        <span>GHOST</span>® Full Disclosure Label
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

              <div class="flex-grid__col--lg-5 flex-grid__col--sm-6 flex-grid__col--xs-12">
                <div class="desc_img">
                  <img
                    src="/assets/products/SONIC_Action.png"
                    alt="GHOST LEGEND<sup>®</sup> x SONIC<sup>®</sup> pre workout"
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
