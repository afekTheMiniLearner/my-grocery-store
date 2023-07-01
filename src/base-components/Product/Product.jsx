import React from 'react';
import PropTypes from 'prop-types';
import { BsCartPlus, BsCartDash } from 'react-icons/bs';
import classNames from 'classnames';

import './Product.scss';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import ActionButton from '../ActionButton/ActionButton';

export default function Product({
  className,
  onAdd,
  onClick,
  onRemove,
  price,
  productName,
  selectedCount,
}) {
  const classes = classNames('product', className);

  return (
    <ContentWrapper className={classes} onClick={onClick}>
      <section>{productName}</section>
      <section>${price}</section>
      <div className="product-buttons-container">
        <ActionButton className="product" label="Buy" onClickHandler={onAdd}>
          <BsCartPlus />
        </ActionButton>
        {!!selectedCount && (
          <ActionButton
            className="product warning"
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
  className: PropTypes.string,
  onAdd: PropTypes.func,
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
  price: PropTypes.number,
  productName: PropTypes.string,
  selectedCount: PropTypes.number,
};

Product.defaultProps = {
  className: '',
  onAdd: undefined,
  onClick: undefined,
  onRemove: undefined,
  price: 0,
  productName: undefined,
  selectedCount: 0,
};
