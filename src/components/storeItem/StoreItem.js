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
      <React.Fragment>
        <span
          class="proS product_flv withBgColor"
          data-swatchvalue={item.name}
          style={{ backgroundColor: item.color }}
        />
      </React.Fragment>
    ));
  };

  return (
    <>
      <div class="prodgridlist">
        <div class="product_item">
          <button className="product_item_favourite">
            {isFavourite ? <FaStar /> : <FaRegStar />}
          </button>
          <div class="product_item_header">
            {colors && <div class="color">{renderTypes(colors)}</div>}
            {colors.length === 1 ? (
              <span class="flvText">
                <h6>{colors[0].name}</h6>
              </span>
            ) : (
              <span class="flvText">
                <h6>Multiple Colors Available</h6>
              </span>
            )}
          </div>

          <div class="product_images slick-initialized slick-slider">
            <div class="slick-list draggable">
              <div class="slick-track">
                <div
                  class="slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                />
                <div class="slide-wrapper">
                  <a href="/products/ghost%C2%AE-gamer?variant=33699054715012">
                    <img
                      src="//cdn.shopify.com/s/files/1/0094/4842/3486/products/GamerPeach_400x.png?v=1600093547"
                      alt="GHOST® GAMER"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="tag-overlays tag-overlays--end">
            {!inStock && (
              <div class="sold-out-overlay">
                <p>Sold Out</p>
              </div>
            )}
          </div>
          <div class="product_info">
            <div class="price_title">
              <div class="title">
                <a href="/products/ghost%C2%AE-gamer" class="h5">
                  Ghost® gamer
                </a>
                <span class="tag">GAMER</span>
              </div>
              {usePoints ? (
                <span class="points">9000 PTS</span>
              ) : (
                <div className="priceBox">
                  {isDiscounted && <s className="discountPrice">$163.99</s>}
                  <span class="price">$64.99</span>
                </div>
              )}
            </div>
            <div class="product_overlay">
              <div class="product_btn">
                <button type="button" class="btn cart_btn" disabled={!inStock}>
                  <FaShoppingCart />
                  {inStock ? "Add To Cart" : "Sold Out"}
                </button>
                <a href="/products/ghost%C2%AE-gamer" class="btn details">
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
