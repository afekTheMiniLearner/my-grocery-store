import React from "react";
import PropTypes from "prop-types";

import "./Cart.scss";

function Cart({ totalSelected, totalPrice }) {
  return (
    <div className="cart-container">
      {`Cart(${totalSelected}) Price:${totalPrice}$`}
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

export default Cart;
