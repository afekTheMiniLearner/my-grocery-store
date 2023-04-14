import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import './ModifyProduct.scss';
import { ProductsProxy } from '@utils';
import LabeledInput from '../LabeledInput/LabeledInput';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import ActionButton from '../ActionButton/ActionButton';

export default function ModifyProduct({
  id,
  productName,
  price,
  modificationType,
  navigateCB,
  children,
}) {
  const [updatedProductName, setUpdatedProductName] = useState(undefined);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  const onProductNameChange = (event) => {
    setUpdatedProductName(event.target.value);
  };
  const onPriceChange = (event) => {
    const p = event.target.value;
    setUpdatedPrice(p < 0 ? 0 : p);
  };

  const data = {
    productName: updatedProductName || productName,
    price: updatedPrice,
  };

  const onClickHandler = () => {
    // eslint-disable-next-line default-case
    switch (modificationType) {
      case 'put': {
        const isUpdated = ProductsProxy?.put(data, id);
        if (isUpdated) navigateCB?.();
        break;
      }
      case 'post': {
        const isCreated = ProductsProxy?.post({ id: uuid(), ...data });
        if (isCreated) navigateCB?.();
        break;
      }
      case 'delete': {
        const isDeleted = ProductsProxy?.delete(id);
        if (isDeleted) navigateCB?.();
        break;
      }
    }
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
        label="Price:"
        type="number"
        classes="price"
      />
      <ActionButton
        label={modificationType || 'Modify'}
        onClickHandler={onClickHandler}
      />
      {children}
    </ContentWrapper>
  );
}

ModifyProduct.propTypes = {
  id: PropTypes.string,
  productName: PropTypes.string,
  modificationType: PropTypes.oneOf(['put', 'post', 'delete']),
  price: PropTypes.number,
  navigateCB: PropTypes.func,
};

ModifyProduct.defaultProps = {
  id: undefined,
  productName: 'Product',
  modificationType: undefined,
  price: 0,
  navigateCB: undefined,
};
