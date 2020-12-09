import React from "react";
import { FaChevronUp, FaShoppingCart } from "react-icons/fa";

//-- Stylesheet
import "./purchasebar.scss";

const RadioField = ({
  id,
  index,
  checked,
  currency,
  disabled,
  label,
  selector,
}) => {
  return (
    <div class={selector}>
      <input
        type="radio"
        name={`${id}`}
        id={`${id}${index}`}
        checked={checked}
        value={currency ? currency : label}
        disabled={disabled}
      />
      <label for={`${id}${index}`}>
        {currency ? (
          <span class="money" data-currency-usd={currency}>
            {currency}
          </span>
        ) : (
          label
        )}
      </label>
    </div>
  );
};

const SelectField = ({
  id,
  index,
  checked,
  currency,
  disabled,
  label,
  selector,
}) => {
  return (
    <div class="selector-wrapper">
      <label for="productSelect-option-0">Size</label>
      <select
        class="single-option-selector"
        data-option="option1"
        id="productSelect-option-0"
      >
        <option value="30 Servings">30 Servings</option>
      </select>
    </div>
  );
};

const Purchasebar = ({ inStock = true }) => {
  return (
    <div
      id="purchasebar"
      itemprop="offers"
      itemscope=""
      itemtype="http://schema.org/Offer"
    >
      <form
        action="/cart/add"
        method="post"
        enctype="multipart/form-data"
        id="AddToCartForm"
      >
        <div class="form-wrapper-mobile form-wrapper-mobile--flex">
          <div class="selector-wrappers payment-type" id="paymentType">
            <label class="form__label">Payment Type</label>

            <RadioField
              id="price"
              index="1"
              selector="select_grp"
              checked={true}
              currency="$44.99"
              disabled={false}
            />

            <RadioField
              id="price"
              index="2"
              selector="select_grp pointProduct"
              checked={false}
              label="10000 pts"
              disabled={true}
            />
          </div>

          <div class="swatch clearfix" data-option-index="0">
            <label class="form__label">Size</label>

            <div class="swatch-elements">
              <RadioField
                id="servings"
                index="3"
                selector="swatch-element 30-servings soldout"
                checked={true}
                label="30 Servings"
                disabled={false}
              />
            </div>
          </div>

          <div
            class="select swatch"
            data-name="Flavor"
            data-select="productSelect-option-1"
          >
            <label class="form__label">Flavor</label>

            <div class="select__selected" data-value="SONIC® Cherry Limeade">
              <div class="text">
                <div
                  class="select-swatch select-swatch--background "
                  style={{
                    backgroundImage: `url(/assets/products/Sonic_actionLogo.webp)`,
                  }}
                />
                <span>SONIC® Cherry Limeade</span>
              </div>
              <FaChevronUp />
            </div>
          </div>
          {/* <select
            name="id"
            id="productSelect"
            class="product-single__variants"
          ></select> */}

          {/* <div class="mobileDisplay">
            <div class="swatch clearfix" data-option-index="1">
              <div class="header">Flavor</div>

              <div class="swatch-elements">
                <div
                  data-value="SONIC® Cherry Limeade"
                  class="swatch-element sonic-cherry-limeade soldout"
                >
                  <input
                    data-variant="16411843199050"
                    id="swatch-1-sonic-cherry-limeade-1680956162122"
                    type="radio"
                    name="option-1"
                    value="SONIC® Cherry Limeade"
                    checked=""
                  />

                  <label for="swatch-1-sonic-cherry-limeade-1680956162122">
                    SONIC® Cherry Limeade
                  </label>
                </div>
              </div>
            </div>
          </div> */}

          <div class="Quantity-wrapper">
            <label class="form__label">Quantity</label>
            <div class="product_qty">
              <button type="button" class="minus" />
              <input
                type="text"
                value="1"
                readonly="readonly"
                name="quantity"
                class="product-quantity"
                id="quantity"
              />
              <button type="button" class="plus" />
            </div>
          </div>

          <div class="add-to-cart-wrapper">
            <button
              type="submit"
              class="btn btn--add-to-cart btn--secondary btn--inline-loader disabled"
              disabled={!inStock}
            >
              <div class="text">
                {inStock ? <span>Add To Cart</span> : <span>Out Of Stock</span>}
                <FaShoppingCart />
                <div class="button-loader"></div>
              </div>
            </button>
          </div>

          {/* <div class="point-redemption-wrapper">
            <button
              type="button"
              class="btn btn--point-redemption btn--secondary btn--inline-loader disabled"
              disabled=""
            >
              <div class="text">
                <span>Out Of Stock</span>
                <i class="fas fa-shopping-cart"></i>
                <div class="button-loader"></div>
              </div>
            </button>
          </div> */}

          {/* <div class="customerLoginStatus">false</div>
          <div class="coming-soon">false</div>
          <input type="hidden" name="product-type" value="PRE-WORKOUT" /> */}
        </div>
      </form>

      <div class="errorMessage"></div>
      {/* <div class="cart_popup btn">
        Add To Cart<span></span>
      </div> */}
    </div>
  );
};

export default Purchasebar;
