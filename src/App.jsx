import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { CartConnected, ProductList } from "./components";
import { Header } from "./base-components";
import {
  addToCartAction,
  removeFromCartAction,
  getProductsSelector,
  getSelectedProductsSelector,
} from "./store";

function App() {
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

  return (
    <div className="app-container">
      <Header title={"My grocery store"}>
        <CartConnected />
      </Header>
      <ProductList
        products={products}
        selectedProducts={selectedProducts}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    </div>
  );
}

export default App;
