import React from 'react';
import PropTypes from 'prop-types';

import { ProductsProxy } from '@utils';
import { ActionButton, ModifyProduct } from '@base-components';

export default function EditProduct({ id, navigateCB, price, productName}) {
  const onExecuteHandler = (data) => {
    const isUpdated = ProductsProxy?.put(data, id);
    if (isUpdated) navigateCB?.();
  };

  return (
    <ModifyProduct
      executeButtonLabel="Update product"
      id={id}
      modificationType="put"
      onExecute={onExecuteHandler}
      price={price}
      productName={productName}
    >
      <ActionButton
        className="modifier warning"
        label="Delete product"
        onClickHandler={() => ProductsProxy.delete(id) && navigateCB?.()}
        style={{ justifyContent: 'center' }}
      />
    </ModifyProduct>
  );
}

EditProduct.propTypes = {
  id: PropTypes.string,
  navigateCB: PropTypes.func,
  price: PropTypes.number,
  productName: PropTypes.string,
};

  id: undefined,
  navigateCB: undefined,
  price: 0,
  productName: 'product',
EditProduct.defaultProps = {
};
