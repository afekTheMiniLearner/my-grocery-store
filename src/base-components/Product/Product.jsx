import React from 'react';
import PropTypes from 'prop-types';
import { BsCartPlus, BsCartDash } from 'react-icons/bs';

import './Product.scss';
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
      <section>Product: {productName}</section>
      <section>price: ${price}</section>
      <div className="product-buttons-container">
        <ActionButton label="Buy" onClickHandler={onAdd}>
          <BsCartPlus />
        </ActionButton>
        {!!selectedCount && (
          <ActionButton
            label={`Remove (${selectedCount})`}
            onClickHandler={onRemove}
          >
            <BsCartDash />
          </ActionButton>
        )}
      </div>
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
