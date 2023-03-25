import React from "react";
import PropTypes from "prop-types";

import "./ProductList.scss";
import { Product } from "../../base-components";

function productList({
  products,
  selectedProducts,
  onAdd,
  onRemove,
  onProductClick,
}) {
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
            onProductClick={onProductClick}
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
  selectedProducts: PropTypes.shape({}),
  onRemove: PropTypes.func,
  onAdd: PropTypes.func,
  onProductClick: PropTypes.func,
};

productList.defaultProps = {
  onRemove: undefined,
  onAdd: undefined,
  onProductClick: undefined,
};

export default productList;
