import React from 'react';
import PropTypes from 'prop-types';

import { ProductsProxy } from '@utils';
import { ActionButton, ModifyProduct } from '@base-components';

export default function EditProduct({ id, productName, price, navigateCB }) {
  return (
    <ModifyProduct
      id={id}
      productName={productName}
      price={price}
      navigateCB={navigateCB}
      modificationType="put"
    >
      <ActionButton
        label="Delete product"
        onClickHandler={() => ProductsProxy.delete(id) && navigateCB?.()}
        classes="warning"
      />
    </ModifyProduct>
  );
}

EditProduct.propTypes = {
  id: PropTypes.string,
  productName: PropTypes.string,
  price: PropTypes.number,
  navigateCB: PropTypes.func,
};

EditProduct.defaultProps = {
  id: undefined,
  productName: 'product',
  price: 0,
  navigateCB: undefined,
};
