import React from "react";
import PropTypes from "prop-types";

import "./Product.scss";

function Product({
  productId,
  productName,
  selectedCount,
  price,
  onAdd,
  onAddButtonLabel,
  onRemove,
  onRemoveButtonLabel,
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
          {onRemoveButtonLabel}
        </button>
      )}
      <button className="product-button" onClick={() => onAdd?.(productId)}>
        {onAddButtonLabel} {selectedCount ? `(${selectedCount})` : ""}
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
  onAddButtonLabel: PropTypes.string,
  onRemove: PropTypes.func,
  onRemoveButtonLabel: PropTypes.string,
};

Product.defaultProps = {
  productId: undefined,
  productName: "unnamed",
  selectedCount: 0,
  price: 0,
  onAdd: undefined,
  onAddButtonLabel: "Add to Cart",
  onRemove: undefined,
  onRemoveButtonLabel: "Remove from Cart",
};

export default Product;
