import React from 'react';
import PropTypes from 'prop-types';

import ContentWrapper from '../ContentWrapper/ContentWrapper';
import ActionButton from '../ActionButton/ActionButton';

function Product({
  id,
  productName,
  price,
  selectedCount,
  onClick,
  onAdd,
  onRemove,
}) {
  return (
    <ContentWrapper
      onClick={id ? () => onClick?.(id) : onClick?.()}
      classes="product"
    >
      <h3>Product: {productName}</h3>
      <h4>Price: ${price}</h4>
      {!!selectedCount && (
        <ActionButton
          label="Remove from cart"
          onClickHandler={(event) => {
            event.stopPropagation();
            onRemove();
          }}
        />
      )}
      <ActionButton
        label="Add to Cart"
        onClickHandler={(event) => {
          event.stopPropagation();
          onAdd();
        }}
      />
    </ContentWrapper>
  );
}

Product.propTypes = {
  id: PropTypes.string,
  productName: PropTypes.string,
  price: PropTypes.number,
  selectedCount: PropTypes.number,
  onClick: PropTypes.func,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
};

Product.defaultProps = {
  id: undefined,
  productName: undefined,
  price: 0,
  selectedCount: 0,
  onClick: undefined,
  onAdd: undefined,
  onRemove: undefined,
};

export default Product;
