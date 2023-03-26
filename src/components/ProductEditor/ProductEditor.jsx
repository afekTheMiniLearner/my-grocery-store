import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { onUpdateHandler, onDeleteHandler } from '../../utils';
import {
  ActionButton,
  ContentWrapper,
  LabeledInput,
} from '../../base-components';

function ProductEditor(id, productName, price) {
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
        onClickHandler={() => onDeleteHandler?.(id)}
        classes="delete"
      />
      <ActionButton
        label="Update product"
        onClickHandler={() => onUpdateHandler?.(data, id)}
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
  price: '0',
};

export default ProductEditor;
