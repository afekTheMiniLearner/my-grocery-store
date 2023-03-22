import React from "react";
import PropTypes from "prop-types";

import "./Product.scss";

function Product({ id, productName, selectedCount, price, onAdd, onRemove }) {
  return (
    <div className="product-container">
      <h3>Product: {productName}</h3>
      <h4>Price: ${price}</h4>
      {!!selectedCount && (
        <button className="product-button" onClick={() => onRemove?.(id)}>
          Remove from Cart
        </button>
      )}
      <button className="product-button" onClick={() => onAdd?.(id)}>
        Add to Cart {selectedCount ? `(${selectedCount})` : ""}
      </button>
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.number,
  productName: PropTypes.number,
  selectedCount: PropTypes.string,
  price: PropTypes.string,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
};

Product.defaultProps = {
  id: undefined,
  productName: "unnamed",
  selectedCount: 0,
  price: 0,
  onAdd: undefined,
  onRemove: undefined,
};

export default Product;
