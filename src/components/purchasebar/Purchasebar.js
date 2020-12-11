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
    <div className={selector}>
      <input
        type="radio"
        name={`${id}`}
        id={`${id}${index}`}
        checked={checked}
        value={currency ? currency : label}
        disabled={disabled}
      />
      <label htmlFor={`${id}${index}`}>
        {currency ? (
          <span className="money" data-currency-usd={currency}>
            {currency}
          </span>
        ) : (
          label
        )}
      </label>
    </div>
  );
};

// const SelectField = ({
//   id,
//   index,
//   checked,
//   currency,
//   disabled,
//   label,
//   selector,
// }) => {
//   return (
//     <div className="selector-wrapper">
//       <label htmlFor="productSelect-option-0">Size</label>
//       <select
//         className="single-option-selector"
//         data-option="option1"
//         id="productSelect-option-0"
//       >
//         <option value="30 Servings">30 Servings</option>
//       </select>
//     </div>
//   );
// };

const Purchasebar = ({ inStock = true }) => {
  return (
    <div
      id="purchasebar"
      itemProp="offers"
      itemscope=""
      itemtype="http://schema.org/Offer"
    >
      <form
        action="/cart/add"
        method="post"
        enctype="multipart/form-data"
        id="AddToCartForm"
      >
        <div className="form-wrapper-mobile form-wrapper-mobile--flex">
          <div className="selector-wrappers payment-type" id="paymentType">
            <label className="form__label">Payment Type</label>

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

          <div className="swatch clearfix" data-option-index="0">
            <label className="form__label">Size</label>

            <div className="swatch-elements">
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
            className="select swatch"
            data-name="Flavor"
            data-select="productSelect-option-1"
          >
            <label className="form__label">Flavor</label>

            <div
              className="select__selected"
              data-value="SONIC® Cherry Limeade"
            >
              <div className="text">
                <div
                  className="select-swatch select-swatch--background "
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
            className="product-single__variants"
          ></select> */}

          {/* <div className="mobileDisplay">
            <div className="swatch clearfix" data-option-index="1">
              <div className="header">Flavor</div>

              <div className="swatch-elements">
                <div
                  data-value="SONIC® Cherry Limeade"
                  className="swatch-element sonic-cherry-limeade soldout"
                >
                  <input
                    data-variant="16411843199050"
                    id="swatch-1-sonic-cherry-limeade-1680956162122"
                    type="radio"
                    name="option-1"
                    value="SONIC® Cherry Limeade"
                    checked=""
                  />

                  <label htmlFor="swatch-1-sonic-cherry-limeade-1680956162122">
                    SONIC® Cherry Limeade
                  </label>
                </div>
              </div>
            </div>
          </div> */}

          <div className="Quantity-wrapper">
            <label className="form__label">Quantity</label>
            <div className="product_qty">
              <button type="button" className="minus" />
              <input
                type="text"
                value="1"
                readonly="readonly"
                name="quantity"
                className="product-quantity"
                id="quantity"
              />
              <button type="button" className="plus" />
            </div>
          </div>

          <div className="add-to-cart-wrapper">
            <button
              type="submit"
              className="btn btn--add-to-cart btn--secondary btn--inline-loader disabled"
              disabled={!inStock}
            >
              <div className="text">
                {inStock ? <span>Add To Cart</span> : <span>Out Of Stock</span>}
                <FaShoppingCart />
                <div className="button-loader"></div>
              </div>
            </button>
          </div>

          {/* <div className="point-redemption-wrapper">
            <button
              type="button"
              className="btn btn--point-redemption btn--secondary btn--inline-loader disabled"
              disabled=""
            >
              <div className="text">
                <span>Out Of Stock</span>
                <i className="fas fa-shopping-cart"></i>
                <div className="button-loader"></div>
              </div>
            </button>
          </div> */}

          {/* <div className="customerLoginStatus">false</div>
          <div className="coming-soon">false</div>
          <input type="hidden" name="product-type" value="PRE-WORKOUT" /> */}
        </div>
      </form>

      <div className="errorMessage"></div>
      {/* <div className="cart_popup btn">
        Add To Cart<span></span>
      </div> */}
    </div>
  );
};

export default Purchasebar;
