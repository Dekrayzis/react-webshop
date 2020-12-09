import React, { useState } from "react";
import {
  FaPhone,
  FaChevronDown,
  FaUser,
  FaCartPlus,
  FaSearch,
} from "react-icons/fa";

import { getPhoneNumber } from "../../helpers";
import "./header.scss";
import "./nav.scss";
import Popup_Cart from "../../components/popups/cart/Popup_Cart";

const menu = [
  {
    class: "sub",
    label: "Shop",
    category: "",
    subCategory: "all",
    mainLink: true,
    hasSubMenu: true,
    subMenu: [
      {
        class: "supplements",
        label: "Supplements",
        category: "",
        subCategory: "supplements",
        mainLink: false,
        subMenu: [
          {
            class: "",
            label: "All",
            category: "supplements",
            subCategory: "all",
            mainLink: false,
            subMenu: [],
          },
          {
            class: "",
            label: "Samples",
            category: "supplements",
            subCategory: "categories-samples",
            mainLink: false,
            subMenu: [],
          },
        ],
      },
      {
        class: "bundles",
        label: "Bundles",
        category: "collections",
        subCategory: "bundles",
        mainLink: false,
        subMenu: [],
      },
      {
        class: "apparel",
        label: "Apparel",
        category: "apparel",
        subCategory: "apparel",
        mainLink: false,
        subMenu: [
          {
            class: "",
            label: "Men's",
            category: "apparel",
            subCategory: "mens",
            mainLink: false,
            subMenu: [],
          },
          {
            class: "",
            label: "Women's",
            category: "apparel",
            subCategory: "womens",
            mainLink: false,
            subMenu: [],
          },
          {
            class: "",
            label: "AOTM",
            category: "apparel",
            subCategory: "aotm",
            mainLink: false,
            subMenu: [],
          },
        ],
      },
      {
        class: "gear",
        label: "Gear",
        category: "collections",
        subCategory: "gear",
        mainLink: false,
        subMenu: [],
      },
    ],
  },
  {
    class: "sub",
    label: "Lifestyle",
    category: "pages",
    subCategory: "vicenco-story",
    mainLink: true,
    hasSubMenu: true,
    subMenu: [
      {
        class: "story",
        label: "Story",
        category: "pages/vicenco-story",
        subCategory: "story",
        mainLink: false,
        subMenu: [],
      },
      {
        class: "fam",
        label: "Family",
        category: "blogs",
        subCategory: "meet-the-family",
        mainLink: false,
        subMenu: [],
      },
      {
        class: "content",
        label: "Content",
        category: "blogs",
        subCategory: "content",
        mainLink: false,
        subMenu: [],
      },
      {
        class: "videos",
        label: "Videos",
        category: "pages",
        subCategory: "building-the-brand",
        mainLink: false,
        subMenu: [],
      },
    ],
  },
  {
    class: "sub",
    label: "Loyalty",
    category: "pages",
    subCategory: "loyalty",
    mainLink: false,
    hasSubMenu: false,
    subMenu: [],
  },
];

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const renderMenuList = (array) => {
    const itemList = array.map((item, idx) => (
      <li key={idx} className="sub">
        <a
          href={item.hasSubMenu ? null : `${item.category}/${item.subCategory}`}
        >
          {item.label} {item.mainLink ? <FaChevronDown /> : null}
        </a>
        {item.subMenu.length > 0 && <ul>{renderMenuList(item.subMenu)}</ul>}
      </li>
    ));

    return itemList;
  };

  return (
    <header className="header">
      <div className="top_header">
        <div className="container">
          <div className="flex-grid">
            <div className="flex-grid__col--xs-3">
              <div className="call_connect">
                <FaPhone />
                <a href={`tel:${getPhoneNumber()}`}>{getPhoneNumber()}</a>
              </div>
            </div>

            <div className="flex-grid__col--xs-6">
              <div className="announcements ">
                <div className="text-center">
                  Please allow an additional 3-5 business days for your order to
                  be processed.
                </div>
              </div>
            </div>

            <div className="flex-grid__col--xs-3"></div>
          </div>
        </div>
      </div>

      {/* Lower header */}
      <div className="mdl_header">
        <div className="flex-grid flex-grid--no-margin flex-grid--centered">
          <div className="flex-grid__col--xs-3 logo">
            <a href="/">
              <img
                data-src="/assets/logo.svg"
                className="sm-down--hide lozad"
                src="/assets/logo.svg"
                data-loaded="true"
              />
              <img src="/assets/dark-logo.svg" className="sm-down--show hide" />
            </a>
          </div>

          <div className="flex-grid__col--xs-0 flex-grid__col--lg-6">
            <nav className="main-nav">
              <ul>{renderMenuList(menu)}</ul>
            </nav>
          </div>

          <div className="flex-grid__col--xs-9 flex-grid__col--lg-3">
            <div className="sub_nav">
              <div className="search">
                <a href="#" className="open-search-popup">
                  <FaSearch />
                </a>
              </div>

              {/* <div className="urlRedirects region-select">
                <div
                  className="select swatch"
                  data-name="region-select"
                  data-select="region-select-mobile"
                >
                  <div className="select__selected" data-value="test">
                    <div className="text">
                      <img src="" />

                      <span>US</span>
                    </div>

                    <i className="fas fa-chevron-up"></i>
                  </div>

                  <ul className="select__list">
                    <li data-value="https://vicenco.co.uk">
                      <img src="" />

                      <span>US</span>
                    </li>

                    <li data-value="https://uk.vicenco.co.uk">
                      <img src="" />

                      <span>EU</span>
                    </li>

                    <li data-value="https://au.vicenco.co.uk">
                      <img src="" />

                      <span>AU</span>
                    </li>
                  </ul>
                </div>

                <select id="region-select-mobile" name="urlRedirect" value="GO">
                  <option value="https://vicenco.co.uk">US</option>
                  <option value="https://uk.vicenco.co.uk">EU</option>
                  <option value="https://au.vicenco.co.uk">AU</option>
                </select>
              </div> */}

              <div className="account myacc" id="myAcc">
                <a href="/account/login" className="accountLink">
                  Account
                </a>

                <ul className="option_list headerPopup">
                  <li>
                    <a href="/account">
                      <FaUser /> My Account
                    </a>
                  </li>

                  <li className="points">
                    <span className="loyalty-point-balance">0</span>
                    <sup>Points</sup>
                  </li>
                </ul>
              </div>

              <div
                className="cart"
                onClick={() => setShowCart((prev) => !prev)}
              >
                <span className="cart_icon">
                  <FaCartPlus />
                  <span className="cart_status" id="CartCount">
                    0
                  </span>
                </span>

                {showCart && <Popup_Cart isOpen={showCart} />}
              </div>

              <div className="mobile-nav-link">
                <i className="fas fa-bars" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
