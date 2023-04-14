import React from 'react';
import PropTypes from 'prop-types';
import { BsCart, BsCurrencyDollar } from 'react-icons/bs';

import './Cart.scss';

export default function Cart({ totalSelected, totalPrice }) {
  return (
    <div className="cart-container">
      <div>
        <BsCart /> {totalSelected}
      </div>
      <div>
        <BsCurrencyDollar /> {totalPrice}
      </div>
    </div>
  );
}

Cart.propTypes = {
  totalSelected: PropTypes.number,
  totalPrice: PropTypes.number,
};

Cart.defaultProps = {
  totalSelected: 0,
  totalPrice: 0,
};
