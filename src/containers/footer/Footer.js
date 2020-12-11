import React from "react";
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import { getPhoneNumber } from "../../helpers";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="lozad"
      style={{ backgroundImage: "url(../assets/Graffiti_Black_2048x.png)" }}
    >
      <div className="container">
        <div className="two-thirds auto">
          <div className="top_footer">
            <div>
              <div className="flex-grid">
                <div className="flex-grid__col--xs-4 flex-grid__col--md-4 hide">
                  <Link to="/" className="footer_logo">
                    <img
                      className="lozad"
                      data-src="/assets/logo.svg"
                      alt="logo"
                    />
                  </Link>

                  <div>
                    <div className="social-links">
                      <ul>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://www.instagram.com/vicenco/?hl=en"
                          >
                            <FaInstagram />
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://www.facebook.com/vicenco/"
                            className="fab fa-facebook-f"
                          >
                            <FaFacebookF />
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://twitter.com/vicenco?lang=en"
                          >
                            <FaTwitter />
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://www.youtube.com/channel/UC0j1mZixvnXuBzTrcLy5joQ"
                            className="fab fa-youtube"
                          >
                            <FaYoutube />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex-grid__col--xs-4 flex-grid__col--md-4">
                  <div className="footer_nav">
                    <h5>Who We Are</h5>
                    <ul>
                      <li>
                        <Link to="/store/all-products">Shop</Link>
                      </li>

                      <li>
                        <Link to="/">Lifestyle</Link>
                      </li>

                      <li>
                        <Link to="/pages/loyalty">Loyalty</Link>
                      </li>

                      <li>
                        <Link to="/blogs/careers">Careers</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex-grid__col--xs-4 flex-grid__col--md-4 sm-down--hide">
                  <Link to="/" className="footer_logo">
                    <img
                      className="lozad"
                      data-src="/assets/logo.svg5"
                      src="/assets/logo.svg"
                      alt="logo"
                    />
                  </Link>

                  <div>
                    <div className="social-links">
                      <ul>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://www.instagram.com/vicenco/?hl=en"
                            className="fab fa-instagram"
                          >
                            <FaInstagram />
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://www.facebook.com/vicenco/"
                            className="fab fa-facebook-f"
                          >
                            <FaFacebookF />
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://twitter.com/vicenco?lang=en"
                            className="fab fa-twitter"
                          >
                            <FaTwitter />
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://www.youtube.com/channel/UC0j1mZixvnXuBzTrcLy5joQ"
                            className="fab fa-youtube"
                          >
                            <FaYoutube />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex-grid__col--xs-4 flex-grid__col--md-4">
                  <div className="footer_nav">
                    <h5>Support</h5>

                    <ul>
                      <li>
                        <Link to="/shipping-returns">
                          Shipping &amp; Returns
                        </Link>
                      </li>

                      <li>
                        <Link to="/terms-and-service">Terms and Service</Link>
                      </li>

                      <li>
                        <Link to="/contact-us">Contact Vicenco®</Link>
                      </li>

                      <li>
                        <Link to="/store-locator">Store Locator</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom_footer">
            <a href="mailto:support@vicenco.co.uk">support@vicenco.co.uk</a>
            <a href={`tel:${getPhoneNumber()} `}>{getPhoneNumber()}</a>
            <p>170 S. Green Valley Parkway, Suite 300, Henderson NV 89012</p>
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
