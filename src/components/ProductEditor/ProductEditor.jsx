import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ProductsProxy } from '@utils';
import { ActionButton, ContentWrapper, LabeledInput } from '@base-components';

function ProductEditor({ id, productName, price, navigateCB }) {
  const [updatedProductName, setUpdatedProductName] = useState(productName);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  const shouldNavigate = !!navigateCB;

  const onProductNameChange = (event) => {
    setUpdatedProductName(event.target.value);
  };
  const onPriceChange = (event) => {
    const p = event.target.value;
    setUpdatedPrice(parseInt(p < 0 ? 0 : p));
  };

  const data = {
    productName: updatedProductName || productName,
    price: updatedPrice || price,
  };

  return (
    <ContentWrapper classes="product">
      <LabeledInput
        placeholder={updatedProductName}
        onChangeHandler={onProductNameChange}
        label="Product:"
        type="text"
      />
      <LabeledInput
        placeholder={updatedPrice}
        onChangeHandler={onPriceChange}
        label="Price :"
        type="number"
        classes="price-input"
      />
      <ActionButton
        label="Delete product"
        onClickHandler={() => {
          const isDeleted = ProductsProxy.delete(id);
          if (shouldNavigate && isDeleted) navigateCB();
        }}
        classes="rectangle-button warning"
      />
      <ActionButton
        label="Update product"
        onClickHandler={() => {
          const isUpdated = ProductsProxy.put(data, id);
          if (shouldNavigate && isUpdated) navigateCB();
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
  navigateCB: PropTypes.func,
};

ProductEditor.defaultProps = {
  id: undefined,
  productName: 'product',
  price: 0,
  navigateCB: undefined,
};

export default ProductEditor;
