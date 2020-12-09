import React, { useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Switch from "../elements/switch/Switch";
import "./filters.scss";

const ProductType = ({ filters = [], isOpen = false, showFilterList }) => {
  const productType = (val) => {};

  const renderFilterTypes = (val) => {
    filters.map((filter) => (
      <li class="cb_switch">
        <Switch callBack={productType} />
        <label class="cb_switch_label" for={`categories-${filter.name}`}>
          <span>{filter.name}</span>
        </label>
      </li>
    ));
  };

  const handleClick = () => {
    showFilterList(!isOpen);
  };

  return (
    <div
      class={`select_drp product_drp ${isOpen ? "open" : null}`}
      id="filter_tab"
      onClick={() => handleClick()}
    >
      <span class="cs-placeholder">
        Filter Products {!isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </span>
      <div class="cs-options">
        <ul class="sidebar-tag">
          <li class="cb_switch">
            <Switch callBack={productType} />
            <label class="cb_switch_label" for="categories-vegan">
              <span>VEGAN</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductType;
