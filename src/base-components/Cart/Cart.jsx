import React from "react";
import PropTypes from "prop-types";

import "./Cart.scss";

function Cart({ totalProductsSelected, totalPrice }) {
  return (
    <div className="cart-container">
      {`Cart(${totalProductsSelected}) Price:${totalPrice}`}
    </div>
  );
}

Cart.propTypes = {
  totalProductsSelected: PropTypes.number,
  totalPrice: PropTypes.number,
};

Cart.defaultProps = {
  totalProductsSelected: 0,
  totalPrice: 0,
};

export default Cart;
