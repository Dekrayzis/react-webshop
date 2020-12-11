import React from "react";
import { Link } from "react-router-dom";
import "../styles/_errorPage.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Error404 = () => {
  return (
    <div id="error-page">
      <div className="error-content">
        <div className="brand-name">
          <Link to="/" itemProp="url">
            <img src="/assets/footer_logo.svg" alt="Logo" />
          </Link>
        </div>

        <div className="error_msg">
          <div className="error-img">
            <img src="/assets/link-broken.svg" alt="Error icon" />
          </div>
          <h2>Ooops.... Error 404</h2>
          <p>Sorry, But the page you are looking for does't exist</p>
          <Link to="/" className="btn">
            Go To Home Page
          </Link>
        </div>
      </div>

      <div className="bottom_social">
        <ul className="social-links">
          <li>
            <a
              href="https://www.facebook.com/vicenco_1981/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/vicenco_1981"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaTwitter />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/vicenco_1981/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Error404;
