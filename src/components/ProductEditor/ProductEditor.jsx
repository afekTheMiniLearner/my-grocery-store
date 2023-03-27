import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ProductsProxy } from '../../utils';
import {
  ActionButton,
  ContentWrapper,
  LabeledInput,
} from '../../base-components';

function ProductEditor({ id, productName, price }) {
  const [updatedProductName, setUpdatedProductName] = useState(productName);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  const onProductNameChange = (event) => {
    if (event.target.value === '') return;
    setUpdatedProductName(event.target.value);
  };
  const onPriceChange = (event) => {
    if (event.target.value === '') return;
    setUpdatedPrice(parseInt(event.target.value));
  };

  const data = {
    id,
    productName: updatedProductName,
    price: updatedPrice,
  };

  console.log(productName, price);
  return (
    <ContentWrapper classes="product">
      <LabeledInput
        inputState={updatedProductName}
        onChangeHandler={onProductNameChange}
        label="Product:"
        type="text"
      />
      <LabeledInput
        inputState={updatedPrice}
        onChangeHandler={onPriceChange}
        label="Price:"
        type="number"
      />
      <ActionButton
        label="Delete product"
        onClickHandler={() => ProductsProxy.delete(id)}
        classes="delete-button"
      />
      <ActionButton
        label="Update product"
        onClickHandler={() => ProductsProxy.put(data, id)}
      />
    </ContentWrapper>
  );
}

ProductEditor.propTypes = {
  id: PropTypes.string,
  productName: PropTypes.string,
  price: PropTypes.number,
};

ProductEditor.defaultProps = {
  id: undefined,
  productName: 'product',
  price: 0,
};

export default ProductEditor;
