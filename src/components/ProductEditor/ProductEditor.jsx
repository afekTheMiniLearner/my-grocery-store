import React, { useState } from "react";
import PropTypes from "prop-types";

import "./ProductEditor.scss";
import { onUpdateHandler, onDeleteHandler } from "../../utils";

function ProductEditor({
  productId,
  productName,
  selectedCount,
  price,
  onUpdateButtonLabel,
  onDeleteButtonLabel,
}) {
  const [updatedProductName, setUpdatedProductName] = useState(productName);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  const onProductNameChange = (event) => {
    if (event.target.value === "" || event.target.value === productName) return;
    setUpdatedProductName(event.target.value);
  };
  const onPriceChange = (event) => {
    if (event.target.value === "" || event.target.value === price) return;
    setUpdatedPrice(parseInt(event.target.value));
  };

  const data = {
    id: productId,
    productName: updatedProductName,
    price: updatedPrice,
  };

  return (
    <div className="product-editor-container">
      <div className="edit-data-container">
        <h3>Product: {productName}</h3>
        <input type={"text"} onChange={onProductNameChange}></input>
      </div>
      <div className="edit-data-container">
        <h4>Price: ${price}</h4>
        <input type={"number"} onChange={onPriceChange}></input>
      </div>
      {
        <button
          className="product-editor-button delete"
          onClick={() => onDeleteHandler?.(productId)}
        >
          {onDeleteButtonLabel}
        </button>
      }
      <button
        className="product-editor-button"
        onClick={() => onUpdateHandler?.(data, productId)}
      >
        {onUpdateButtonLabel} {selectedCount ? `(${selectedCount})` : ""}
      </button>
    </div>
  );
}

ProductEditor.propTypes = {
  productId: PropTypes.string,
  productName: PropTypes.string,
  selectedCount: PropTypes.number,
  price: PropTypes.number,
  onUpdate: PropTypes.func,
  onUpdateButtonLabel: PropTypes.string,
  onDelete: PropTypes.func,
  onDeleteButtonLabel: PropTypes.string,
};

ProductEditor.defaultProps = {
  productId: undefined,
  productName: "unnamed",
  selectedCount: 0,
  price: 0,
  onUpdate: undefined,
  onUpdateButtonLabel: "Update data",
  onDelete: undefined,
  onDeleteButtonLabel: "Delete from DB",
};

export default ProductEditor;
