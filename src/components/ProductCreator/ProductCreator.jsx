import React, { useRef, useState } from "react";
import { v4 as uuid } from "uuid";

import "./ProductCreator.scss";
import { onCreationHandler } from "../../utils";

function ProductCreator() {
  const [updatedProductName, setUpdatedProductName] = useState("");
  const [updatedPrice, setUpdatedPrice] = useState(0);

  const onProductNameChange = (event) => {
    if (event.target.value === "") return;
    setUpdatedProductName(event.target.value);
  };
  const onPriceChange = (event) => {
    if (event.target.value === "") return;
    setUpdatedPrice(parseInt(event.target.value));
  };

  const data = {
    id: uuid(),
    productName: updatedProductName,
    price: updatedPrice,
  };

  return (
    <div className="product-editor-container">
      <div className="edit-data-container">
        <h3>Enter product name: </h3>
        <input type={"text"} onChange={onProductNameChange}></input>
      </div>
      <div className="edit-data-container">
        <h4>Enter price: </h4>
        <input type={"number"} onChange={onPriceChange}></input>
      </div>
      <button
        className="product-creator-button"
        onClick={() => {
          if (!updatedProductName || !updatedPrice) return;
          onCreationHandler?.(data);
        }}
      >
        Create product
      </button>
    </div>
  );
}

export default ProductCreator;
