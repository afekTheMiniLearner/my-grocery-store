import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ModifyProduct.scss';
import LabeledInput from '../LabeledInput/LabeledInput';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import ActionButton from '../ActionButton/ActionButton';

export default function ModifyProduct({
  children,
  executeButtonLabel,
  onExecute,
  price,
  productName,
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
        onChangeHandler={onProductNameChange}
        placeholder={productName}
        type="text"
        value={updatedProductName}
      />
      <LabeledInput
        className="price"
        label="Price:"
        onChangeHandler={onPriceChange}
        placeholder={price}
        type="number"
        value={updatedPrice}
      />
      <ActionButton
        className="modifier"
        label={executeButtonLabel}
        onClickHandler={() => onExecute(data)}
        style={{ justifyContent: 'center' }}
      />
      {children}
    </ContentWrapper>
  );
}

ModifyProduct.propTypes = {
  executeButtonLabel: PropTypes.string,
  onExecute: PropTypes.func,
  price: PropTypes.number,
  productName: PropTypes.string,
};

ModifyProduct.defaultProps = {
  executeButtonLabel: undefined,
  onExecute: undefined,
  price: 0,
  productName: 'Product name',
};
