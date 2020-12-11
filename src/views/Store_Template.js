import React, { useState } from "react";

//-- Components
import StoreItem from "../components/storeItem/StoreItem";
import PaymentMethod from "./../components/filters/PaymentMethod";
import ProductType from "../components/filters/ProductType";

//-- Stylesheet
import "../styles/store.scss";

const Store_Template = (props) => {
  const [togglePrice, setTogglePrice] = useState(true);
  const [toggleFilterList, setFilterList] = useState(false);
  const pageTitle = props.match.params.id;

  const handlePriceFilter = (val) => {
    setTogglePrice(val);
  };

  const handleProductFilter = (val) => {
    setFilterList(val);
  };

  return (
    <>
      <div className="filter_header">
        <div className="container">
          <div className="clearfix filter-mob">
            <ProductType
              isOpen={toggleFilterList}
              showFilterList={handleProductFilter}
            />
            <PaymentMethod priceToggle={handlePriceFilter} />
            <div className="pageTitle">
              <h1>{pageTitle}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="store__items_list">
        <StoreItem usePoints={togglePrice} />
        <StoreItem usePoints={togglePrice} />
        <StoreItem usePoints={togglePrice} />
        <StoreItem usePoints={togglePrice} />
        <StoreItem usePoints={togglePrice} />
      </div>
    </>
  );
};

export default Store_Template;
