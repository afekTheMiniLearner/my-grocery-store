import React from 'react';
import { useSelector } from 'react-redux';

import { Cart } from '@base-components';
import { getSelectedProductsSelector, getTotalPriceSelector } from '@store';

export default function CartConnected() {
  const { selectedProducts, totalPrice } = useSelector((state) => {
    return {
      selectedProducts: getSelectedProductsSelector(state),
      totalPrice: getTotalPriceSelector(state),
    };
  });

  const totalSelected = Object.values(selectedProducts).reduce(
    (total, products) => total + products,
    0
  );

  return <Cart totalPrice={totalPrice} totalSelected={totalSelected} />;
}
