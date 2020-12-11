import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Switch from "../elements/switch/Switch";
import "./filters.scss";

const ProductType = ({ filters = [], isOpen = false, showFilterList }) => {
  const productType = (val) => {};

  // const renderFilterTypes = (val) => {
  //   filters.map((filter) => (
  //     <li className="cb_switch">
  //       <Switch callBack={productType} />
  //       <label className="cb_switch_label" htmlFor={`categories-${filter.name}`}>
  //         <span>{filter.name}</span>
  //       </label>
  //     </li>
  //   ));
  // };

  const handleClick = () => {
    showFilterList(!isOpen);
  };

  return (
    <div
      className={`select_drp product_drp ${isOpen ? "open" : null}`}
      id="filter_tab"
      onClick={() => handleClick()}
    >
      <span className="cs-placeholder">
        Filter Products {!isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </span>
      <div className="cs-options">
        <ul className="sidebar-tag">
          <li className="cb_switch">
            <Switch callBack={productType} />
            <label className="cb_switch_label" htmlFor="categories-vegan">
              <span>VEGAN</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductType;
