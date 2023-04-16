import React from 'react';
import PropTypes from 'prop-types';
import { BsCartPlus, BsCartDash } from 'react-icons/bs';
import classNames from 'classnames';

import './Product.scss';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import ActionButton from '../ActionButton/ActionButton';

export default function Product({
  productName,
  price,
  selectedCount,
  onClick,
  onAdd,
  onRemove,
  className,
}) {
  const classes = classNames('product', className);

  return (
    <ContentWrapper onClick={onClick} className={classes}>
      <section>{productName}</section>
      <section>${price}</section>
      <div className="product-buttons-container">
        <ActionButton label="Buy" onClickHandler={onAdd} className="product">
          <BsCartPlus />
        </ActionButton>
        {!!selectedCount && (
          <ActionButton
            label={`Remove (${selectedCount})`}
            onClickHandler={onRemove}
            className="product warning"
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
  className: PropTypes.string,
};

Product.defaultProps = {
  productName: undefined,
  price: 0,
  selectedCount: 0,
  onClick: undefined,
  onAdd: undefined,
  onRemove: undefined,
  className: '',
};
