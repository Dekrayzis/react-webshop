import React from "react";
import { FaSignal, FaShoppingCart, FaStar, FaRegStar } from "react-icons/fa";
import "./storeItem.scss";

const colors = [
  {
    color: "rgb(154, 109, 99)",
    name: "Clay",
  },
  {
    color: "rgb(217, 69, 135)",
    name: "Pink",
  },
  {
    color: "rgb(102, 108, 205)",
    name: "Purple",
  },
  {
    color: "rgb(253, 170, 141)",
    name: "Random",
  },
];

const StoreItem = ({
  inStock = false,
  usePoints = false,
  isFavourite = true,
  isDiscounted = true,
}) => {
  const renderTypes = (arr) => {
    return arr.map((item) => (
      <React.Fragment key={item.name}>
        <span
          className="proS product_flv withBgColor"
          data-swatchvalue={item.name}
          style={{ backgroundColor: item.color }}
        />
      </React.Fragment>
    ));
  };

  return (
    <>
      <div className="prodgridlist">
        <div className="product_item">
          <button className="product_item_favourite">
            {isFavourite ? <FaStar /> : <FaRegStar />}
          </button>
          <div className="product_item_header">
            {colors && <div className="color">{renderTypes(colors)}</div>}
            {colors.length === 1 ? (
              <span className="flvText">
                <h6>{colors[0].name}</h6>
              </span>
            ) : (
              <span className="flvText">
                <h6>Multiple Colors Available</h6>
              </span>
            )}
          </div>

          <div className="product_images slick-initialized slick-slider">
            <div className="slick-list draggable">
              <div className="slick-track">
                <div
                  className="slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                />
                <div className="slide-wrapper">
                  <a href="/">
                    <img
                      src="/assets/products/GamerPeach_400x.webp"
                      alt="VICENCO® GAMER"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tag-overlays tag-overlays--end">
            {!inStock && (
              <div className="sold-out-overlay">
                <p>Sold Out</p>
              </div>
            )}
          </div>
          <div className="product_info">
            <div className="price_title">
              <div className="title">
                <a href="/products/VICENCO%C2%AE-gamer" className="h5">
                  VICENCO® gamer
                </a>
                <span className="tag">GAMER</span>
              </div>
              {usePoints ? (
                <span className="points">9000 PTS</span>
              ) : (
                <div className="priceBox">
                  {isDiscounted && <s className="discountPrice">$163.99</s>}
                  <span className="price">$64.99</span>
                </div>
              )}
            </div>
            <div className="product_overlay">
              <div className="product_btn">
                <button
                  type="button"
                  className="btn cart_btn"
                  disabled={!inStock}
                >
                  <FaShoppingCart />
                  {inStock ? "Add To Cart" : "Sold Out"}
                </button>
                <a href="/products/VICENCO%C2%AE-gamer" className="btn details">
                  <FaSignal />
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreItem;
