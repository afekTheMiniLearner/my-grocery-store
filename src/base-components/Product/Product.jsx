import React from "react";
import PropTypes from "prop-types";

import "./Product.scss";

function Product({
  productId,
  productName,
  selectedCount,
  price,
  onAdd,
  onRemove,
}) {
  return (
    <div className="product-container">
      <h3>Product: {productName}</h3>
      <h4>Price: ${price}</h4>
      {!!selectedCount && (
        <button
          className="product-button"
          onClick={() => onRemove?.(productId)}
        >
          Remove from Cart
        </button>
      )}
      <button className="product-button" onClick={() => onAdd?.(productId)}>
        Add to Cart {selectedCount ? `(${selectedCount})` : ""}
      </button>
    </div>
  );
}

Product.propTypes = {
  productId: PropTypes.string,
  productName: PropTypes.string,
  selectedCount: PropTypes.number,
  price: PropTypes.number,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
};

Product.defaultProps = {
  productId: undefined,
  productName: "unnamed",
  selectedCount: 0,
  price: 0,
  onAdd: undefined,
  onRemove: undefined,
};

export default Product;
