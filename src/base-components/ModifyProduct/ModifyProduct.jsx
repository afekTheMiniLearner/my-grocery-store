import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ContentWrapper, LabeledInput } from '@base-components';

export default function ModifyProduct({ productName, price, children }) {
  const [updatedProductName, setUpdatedProductName] = useState(undefined);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  const onProductNameChange = (event) => {
    setUpdatedProductName(event.target.value);
  };
  const onPriceChange = (event) => {
    const p = event.target.value;
    setUpdatedPrice(p < 0 ? 0 : p);
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
      {children}
    </ContentWrapper>
  );
}

ModifyProduct.propTypes = {
  productName: PropTypes.string,
  price: PropTypes.number,
};

ModifyProduct.defaultProps = {
  productName: 'product',
  price: 0,
};

/** import { ProductsProxy } from '@utils';
 * 
 *   const shouldNavigate = !!navigateCB;

 * 
 * 
 *   const data = {
    productName: updatedProductName || productName,
    price: updatedPrice || price,
  };
 *       <ActionButton
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
 */
