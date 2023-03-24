import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { CartConnected, ProductList } from "../../components";
import { Header } from "../../base-components";
import {
  addToCartAction,
  removeFromCartAction,
  initProductsAction,
  getProductsSelector,
  getSelectedProductsSelector,
} from "../../store";
import { getDataFromDB } from "../../utils";

export default function StoreHomePage() {
  const dispatch = useDispatch();
  const onAdd = (productId) => {
    dispatch(addToCartAction({ productId }));
  };
  const onRemove = (productId) => {
    dispatch(removeFromCartAction({ productId }));
  };
  const initProducts = (products) => {
    dispatch(initProductsAction({ products }));
  };
  const products = useSelector((state) => getProductsSelector(state));
  const selectedProducts = useSelector((state) => {
    return getSelectedProductsSelector(state);
  });
  const navigate = useNavigate();
  const onProductClick = (productId) => navigate(`/product/${productId}`);

  useEffect(() => {
    getDataFromDB("http://localhost:3004/ProductsData")
      .then((data) => initProducts(data))
      .catch(() => {});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
