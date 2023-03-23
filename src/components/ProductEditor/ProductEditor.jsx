import React from "react";
import PropTypes from "prop-types";

import "./ProductEditor.scss";

function ProductEditor({
  productId,
  productName,
  selectedCount,
  price,
  onAdd,
  onAddButtonLabel,
  onDelete,
  onDeleteButtonLabel,
}) {
  return (
    <div className="product-editor-container">
      <h3>Product: {productName}</h3>
      <h4>Price: ${price}</h4>
      {
        <button
          className="product-editor-button"
          onClick={() => onDelete?.(productId)}
        >
          {onDeleteButtonLabel}
        </button>
      }
      <button
        className="product-editor-button"
        onClick={() => onAdd?.(productId)}
      >
        {onAddButtonLabel} {selectedCount ? `(${selectedCount})` : ""}
      </button>
    </div>
  );
}

ProductEditor.propTypes = {
  productId: PropTypes.string,
  productName: PropTypes.string,
  selectedCount: PropTypes.number,
  price: PropTypes.number,
  onAdd: PropTypes.func,
  onAddButtonLabel: PropTypes.string,
  onDelete: PropTypes.func,
  onDeleteButtonLabel: PropTypes.string,
};

ProductEditor.defaultProps = {
  productId: undefined,
  productName: "unnamed",
  selectedCount: 0,
  price: 0,
  onAdd: undefined,
  onAddButtonLabel: "Add to Cart",
  onDelete: undefined,
  onDeleteButtonLabel: "Delete from DB",
};

export default ProductEditor;
