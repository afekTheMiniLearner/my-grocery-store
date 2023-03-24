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
  onProductClick,
}) {
  return (
    <div
      className="product-container"
      onClick={() => onProductClick?.(productId)}
    >
      <h3>Product: {productName}</h3>
      <h4>Price: ${price}</h4>
      {!!selectedCount && (
        <button
          className="product-button"
          onClick={(event) => {
            event.stopPropagation();
            onRemove?.(productId);
          }}
        >
          {onRemoveButtonLabel}
        </button>
      )}
      <button
        className="product-button"
        onClick={(event) => {
          event.stopPropagation();
          onAdd?.(productId);
        }}
      >
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
  onProductClick: PropTypes.func,
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
  onProductClick: undefined,
};

export default Product;
