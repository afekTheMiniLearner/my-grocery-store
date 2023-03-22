import React from "react";
import PropTypes from "prop-types";

import { Product } from "../../base-components";
import "./ProductList.scss";

function productList({ products, selectedProducts, onAdd, onRemove }) {
  return (
    <div className="product-list-container">
      {products.map((productData) => {
        const { id: productId, productName, price } = productData;

        return (
          <Product
            key={productId}
            productId={productId}
            productName={productName}
            price={price}
            selectedCount={selectedProducts[productId] ?? 0}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
}

productList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      productName: PropTypes.string,
      price: PropTypes.number,
    })
  ),
  // {es1a231-as34opo132-039ska0 : 3}
  selectedProducts: PropTypes.shape({}),
  onRemove: PropTypes.func,
  onAdd: PropTypes.func,
};

productList.defaultProps = {
  onRemove: undefined,
  onAdd: undefined,
};

export default productList;
