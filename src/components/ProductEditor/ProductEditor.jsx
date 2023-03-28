import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { ProductsProxy } from '../../utils';
import {
  ActionButton,
  ContentWrapper,
  LabeledInput,
} from '../../base-components';

function ProductEditor({ id, productName, price, navigatePath }) {
  const [updatedProductName, setUpdatedProductName] = useState(productName);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  const navigate = useNavigate();
  const shouldNavigate = !!navigatePath;

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
        onClickHandler={() => {
          const isDeleted = ProductsProxy.delete(id);
          if (shouldNavigate && isDeleted) navigate(navigatePath);
        }}
        classes="rectangle-button delete-button"
      />
      <ActionButton
        label="Update product"
        onClickHandler={() => {
          const isUpdated = ProductsProxy.put(data, id);
          if (shouldNavigate && isUpdated) navigate(navigatePath);
        }}
        classes="rectangle-button"
      />
    </ContentWrapper>
  );
}

ProductEditor.propTypes = {
  id: PropTypes.string,
  productName: PropTypes.string,
  price: PropTypes.number,
  navigateUrl: PropTypes.string,
};

ProductEditor.defaultProps = {
  id: undefined,
  productName: 'product',
  price: 0,
  navigateUrl: undefined,
};

export default ProductEditor;
