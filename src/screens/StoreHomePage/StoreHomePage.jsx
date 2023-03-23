import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { CartConnected, ProductList } from "../../components";
import { Header } from "../../base-components";
import {
  addToCartAction,
  removeFromCartAction,
  getProductsSelector,
  getSelectedProductsSelector,
} from "../../store";

export default function StoreHomePage() {
  const dispatch = useDispatch();
  const onAdd = (productId) => {
    dispatch(addToCartAction({ productId }));
  };
  const onRemove = (productId) => {
    dispatch(removeFromCartAction({ productId }));
  };
  const products = useSelector((state) => getProductsSelector(state));
  const selectedProducts = useSelector((state) => {
    return getSelectedProductsSelector(state);
  });
  const navigate = useNavigate();
  const onProductClick = (productId) => navigate(`/product/${productId}`);

  return (
    <div style={{ margin: "10px" }}>
      <Header title={"My grocery store"}>
        <CartConnected />
      </Header>
      <ProductList
        products={products}
        selectedProducts={selectedProducts}
        onAdd={onAdd}
        onRemove={onRemove}
        onProductClick={onProductClick}
      />
    </div>
  );
}
