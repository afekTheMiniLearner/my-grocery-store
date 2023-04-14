import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ProductsProxy } from '@utils';
import { ActionButton, ContentWrapper, LabeledInput } from '@base-components';

function EditProduct({ id, productName, price, navigateCB }) {
  const [updatedProductName, setUpdatedProductName] = useState(undefined);
  const [updatedPrice, setUpdatedPrice] = useState(price);
  const shouldNavigate = !!navigateCB;

  const onProductNameChange = (event) => {
    setUpdatedProductName(event.target.value);
  };
  const onPriceChange = (event) => {
    const p = event.target.value;
    setUpdatedPrice(p < 0 ? 0 : p);
  };

  const data = {
    productName: updatedProductName || productName,
    price: updatedPrice || price,
  };

  return (
    <ContentWrapper classes="product-modifier">
      <LabeledInput
        label="Product:"
        value={updatedProductName}
        placeholder={productName}
        onChangeHandler={onProductNameChange}
        type="text"
      />
      <LabeledInput
        placeholder={price}
        value={updatedPrice}
        onChangeHandler={onPriceChange}
        label="Price :"
        type="number"
        classes="price"
      />
      <ActionButton
        label="Delete product"
        onClickHandler={() => {
          const isDeleted = ProductsProxy.delete(id);
          if (shouldNavigate && isDeleted) navigateCB();
        }}
        classes="warning"
      />
      <ActionButton
        label="Update product"
        onClickHandler={() => {
          const isUpdated = ProductsProxy.put(data, id);
          if (shouldNavigate && isUpdated) navigateCB();
        }}
      />
    </ContentWrapper>
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

export default EditProduct;
