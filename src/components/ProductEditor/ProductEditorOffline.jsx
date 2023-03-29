import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  ActionButton,
  ContentWrapper,
  LabeledInput,
} from '../../base-components';

function ProductEditorOffline({ productName, price }) {
  const [updatedProductName, setUpdatedProductName] = useState(productName);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  const onProductNameChange = (event) => {
    setUpdatedProductName(event.target.value);
  };
  const onPriceChange = (event) => {
    const p = event.target.value;
    setUpdatedPrice(parseInt(p < 0 ? 0 : p));
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
        label="Price :"
        type="number"
        classes="price-input"
      />
      <ActionButton
        label="Delete product"
        classes="rectangle-button delete-button"
      />
      <ActionButton label="Update product" classes="rectangle-button" />
    </ContentWrapper>
  );
}

ProductEditorOffline.propTypes = {
  productName: PropTypes.string,
  price: PropTypes.number,
};

ProductEditorOffline.defaultProps = {
  productName: 'product',
  price: 0,
};

export default ProductEditorOffline;
