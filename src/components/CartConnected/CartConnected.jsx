import React from "react";
import { useSelector } from "react-redux";

import { Cart } from "../../base-components";
import {
  getSelectedProductsSelector,
  getTotalPriceSelector,
} from "../../store";

function CartConnected() {
  const selectedProducts = useSelector((state) => {
    return getSelectedProductsSelector(state);
  });
  const totalPrice = useSelector((state) => {
    return getTotalPriceSelector(state);
  });

  const totalSelected = Object.values(selectedProducts).reduce(
    (total, products) => total + products,
    0
  );

  return <Cart totalPrice={totalPrice} totalSelected={totalSelected} />;
}

export default CartConnected;
