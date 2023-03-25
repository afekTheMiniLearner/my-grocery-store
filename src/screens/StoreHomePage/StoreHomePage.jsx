import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loading-icons";

import "./StoreHomePage.scss";
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
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    getDataFromDB("http://localhost:3004/ProductsData")
      .then((data) => {
        initProducts(data);
        setIsDataFetched(true);
      })
      .catch(() => {});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isDataFetched ? (
    <div className="home-page-container">
      <Header title={"My grocery store"}>
        <CartConnected />
      </Header>
      <ProductList
        products={products || []}
        selectedProducts={selectedProducts}
        onAdd={onAdd}
        onRemove={onRemove}
        onProductClick={onProductClick}
      />
    </div>
  ) : (
    <div className="loading-page-container">
      <div className="loading-content-wrapper">
        <TailSpin stroke="black" speed={0.8} height={"10em"} width={"10em"} />
        <h2>Loading data, please wait...</h2>
      </div>
    </div>
  );
}
