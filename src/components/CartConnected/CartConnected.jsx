/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import { Cart } from '@base-components';
import { getSelectedProductsSelector, getTotalPriceSelector } from '@store';

function CartConnected({ selectedProducts, totalPrice }) {
  const totalSelected = Object.values(selectedProducts).reduce(
    (total, products) => total + products,
    0
  );

  return <Cart totalPrice={totalPrice} totalSelected={totalSelected} />;
}

const mapStateToProps = (state) => ({
  totalPrice: getTotalPriceSelector(state),
  selectedProducts: getSelectedProductsSelector(state),
});

export default connect(mapStateToProps)(CartConnected);
