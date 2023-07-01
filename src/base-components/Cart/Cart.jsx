import React from 'react';
import PropTypes from 'prop-types';
import { BsCart, BsCurrencyDollar } from 'react-icons/bs';

import './Cart.scss';

export default function Cart({totalPrice, totalSelected }) {
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
  totalPrice: PropTypes.number,
  totalSelected: PropTypes.number,
};

Cart.defaultProps = {
  totalPrice: 0,
  totalSelected: 0,
};
