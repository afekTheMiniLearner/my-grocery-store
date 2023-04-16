import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ModifyProduct.scss';
import LabeledInput from '../LabeledInput/LabeledInput';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import ActionButton from '../ActionButton/ActionButton';

export default function ModifyProduct({
  productName,
  price,
  executeButtonLabel,
  onExecute,
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

  return (
    <ContentWrapper className="product-modifier">
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
        className="price"
      />
      <ActionButton
        label={executeButtonLabel}
        onClickHandler={() => onExecute(data)}
        style={{ justifyContent: 'center' }}
        className="modifier"
      />
      {children}
    </ContentWrapper>
  );
}

ModifyProduct.propTypes = {
  productName: PropTypes.string,
  executeButtonLabel: PropTypes.string,
  onExecute: PropTypes.func,
  price: PropTypes.number,
};

ModifyProduct.defaultProps = {
  productName: 'Product name',
  executeButtonLabel: undefined,
  onExecute: undefined,
  price: 0,
};
