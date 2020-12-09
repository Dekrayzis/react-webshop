import React from "react";
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import { getPhoneNumber } from "../../helpers";
import "./footer.scss";

const Footer = () => {
  return (
    <footer
      id="footer"
      class="lozad"
      style={{ backgroundImage: "url(../assets/Graffiti_Black_2048x.png)" }}
    >
      <div class="container">
        <div class="two-thirds auto">
          <div class="top_footer">
            <div>
              <div class="flex-grid">
                <div class="flex-grid__col--xs-4 flex-grid__col--md-4 hide">
                  <a href="/" class="footer_logo">
                    <img class="lozad" data-src="/assets/logo.svg" />
                  </a>

                  <div>
                    <div class="social-links">
                      <ul>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.instagram.com/vicenco/?hl=en"
                          >
                            <FaInstagram />
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.facebook.com/vicenco/"
                            class="fab fa-facebook-f"
                          >
                            <FaFacebookF />
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://twitter.com/vicenco?lang=en"
                          >
                            <FaTwitter />
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.youtube.com/channel/UC0j1mZixvnXuBzTrcLy5joQ"
                            class="fab fa-youtube"
                          >
                            <FaYoutube />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="flex-grid__col--xs-4 flex-grid__col--md-4">
                  <div class="footer_nav">
                    <h5>Who We Are</h5>
                    <ul>
                      <li>
                        <a href="/collections/all">Shop</a>
                      </li>

                      <li>
                        <a href="/">Lifestyle</a>
                      </li>

                      <li>
                        <a href="/pages/loyalty">Loyalty</a>
                      </li>

                      <li>
                        <a href="/blogs/careers">Careers</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="flex-grid__col--xs-4 flex-grid__col--md-4 sm-down--hide">
                  <a href="/" class="footer_logo">
                    <img
                      class="lozad"
                      data-src="/assets/logo.svg5"
                      src="/assets/logo.svg"
                    />
                  </a>

                  <div>
                    <div class="social-links">
                      <ul>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.instagram.com/vicenco/?hl=en"
                            class="fab fa-instagram"
                          >
                            <FaInstagram />
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.facebook.com/vicenco/"
                            class="fab fa-facebook-f"
                          >
                            <FaFacebookF />
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://twitter.com/vicenco?lang=en"
                            class="fab fa-twitter"
                          >
                            <FaTwitter />
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.youtube.com/channel/UC0j1mZixvnXuBzTrcLy5joQ"
                            class="fab fa-youtube"
                          >
                            <FaYoutube />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="flex-grid__col--xs-4 flex-grid__col--md-4">
                  <div class="footer_nav">
                    <h5>Support</h5>

                    <ul>
                      <li>
                        <a href="/pages/shipping-returns">
                          Shipping &amp; Returns
                        </a>
                      </li>

                      <li>
                        <a href="/pages/terms-and-service">Terms and Service</a>
                      </li>

                      <li>
                        <a href="/pages/contact-us">Contact Vicenco®</a>
                      </li>

                      <li>
                        <a href="/pages/store-locator">Store Locator</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bottom_footer">
            <a href="mailto:support@vicenco.co.uk">support@vicenco.co.uk</a>
            <a href="javascript:void(0);">{getPhoneNumber()}</a>
            <p>170 S. Green Valley Parkway, Suite 300, Henderson NV 89012</p>
            <p class="text-center">
              <a href="/pages/ccpa-privacy-request-form">
                Do Not Sell My Information
              </a>
            </p>
            <p>
              *These statements have not been evaluated by the Food and Drug
              Administration. These products are not intended to diagnose,
              treat, cure or prevent any disease.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
