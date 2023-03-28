import React from 'react';
import PropTypes from 'prop-types';
import { BsCartPlus, BsCartDash } from 'react-icons/bs';

import ContentWrapper from '../ContentWrapper/ContentWrapper';
import ActionButton from '../ActionButton/ActionButton';

function Product({
  productName,
  price,
  selectedCount,
  onClick,
  onAdd,
  onRemove,
}) {
  return (
    <ContentWrapper onClick={onClick} classes="product custom-cursor-edit">
      <h3>Product: {productName}</h3>
      <h4>Price: ${price}</h4>
      {!!selectedCount && (
        <ActionButton
          label={`Remove (${selectedCount})`}
          onClickHandler={onRemove}
          classes="rectangle-button"
        >
          <BsCartDash />
        </ActionButton>
      )}
      <ActionButton label="Buy" onClickHandler={onAdd} classes="rectangle-button">
        <BsCartPlus />
      </ActionButton>
    </ContentWrapper>
  );
}

Product.propTypes = {
  productName: PropTypes.string,
  price: PropTypes.number,
  selectedCount: PropTypes.number,
  onClick: PropTypes.func,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
};

Product.defaultProps = {
  productName: undefined,
  price: 0,
  selectedCount: 0,
  onClick: undefined,
  onAdd: undefined,
  onRemove: undefined,
};

export default Product;
