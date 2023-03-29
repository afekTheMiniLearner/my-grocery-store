import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

import {
  ActionButton,
  ContentWrapper,
  LabeledInput,
} from '../../base-components';

function ProductCreatorOffline() {
  const [updatedProductName, setUpdatedProductName] = useState('');
  const [updatedPrice, setUpdatedPrice] = useState(0);

  const onProductNameChange = (event) => {
    if (event.target.value === '') return;
    setUpdatedProductName(event.target.value);
  };
  const onPriceChange = (event) => {
    if (event.target.value === '') return;
    setUpdatedPrice(parseInt(event.target.value));
  };

  const data = useRef({});

  useEffect(() => {
    data.current = {
      id: uuid(),
      productName: updatedProductName,
      price: updatedPrice,
    };
  }, [updatedProductName, updatedPrice]);

  return (
    <ContentWrapper classes="product">
      <LabeledInput
        label="Enter product name:"
        inputState={updatedProductName}
        onChangeHandler={onProductNameChange}
        type="text"
      />
      <LabeledInput
        label="Enter price:"
        inputState={updatedPrice}
        onChangeHandler={onPriceChange}
        type="number"
        classes="price-input"
      />
      <ActionButton label="Create product" classes="rectangle-button" />
    </ContentWrapper>
  );
}

export default ProductCreatorOffline;
