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
  classes,
}) {
  const classesList = classNames('product', classes);

  return (
    <ContentWrapper onClick={onClick} classes={classesList}>
      <section>{productName}</section>
      <section>${price}</section>
      <div className="product-buttons-container">
        <ActionButton label="Buy" onClickHandler={onAdd} classes="product">
          <BsCartPlus />
        </ActionButton>
        {!!selectedCount && (
          <ActionButton
            label={`Remove (${selectedCount})`}
            onClickHandler={onRemove}
            classes="product warning"
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
  classes: PropTypes.string,
};

Product.defaultProps = {
  productName: undefined,
  price: 0,
  selectedCount: 0,
  onClick: undefined,
  onAdd: undefined,
  onRemove: undefined,
  classes: '',
};
