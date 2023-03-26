import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './ProductList.scss';
import { Product } from '../../base-components';
import {
  addToCartAction,
  getProductsSelector,
  getSelectedProductsSelector,
  initProductsAction,
  removeFromCartAction,
} from '../../store';
import { getDataFromDB } from '../../utils';
import { DB_PRODUCTS_URL } from '../../utils';
import { useEffect } from 'react';

function ProductList({ onDataFetch }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => getProductsSelector(state));
  const selectedProducts = useSelector((state) => {
    return getSelectedProductsSelector(state);
  });

  const onAdd = (productId) => {
    dispatch(addToCartAction({ productId }));
  };
  const onRemove = (productId) => {
    dispatch(removeFromCartAction({ productId }));
  };
  const initProducts = (products) => {
    dispatch(initProductsAction({ products }));
  };

  useEffect(() => {
    getDataFromDB(DB_PRODUCTS_URL)
      .then((data) => {
        initProducts(data);
        onDataFetch(true);
      })
      .catch(() => {});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="product-list-container">
      {products.map((productData) => {
        const { id: productId, productName, price } = productData;

        return (
          <Product
            key={productId}
            productId={productId}
            productName={productName}
            price={price}
            selectedCount={selectedProducts[productId] ?? 0}
            onClick={(productId) => navigate(`/product/${productId}`)}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Product>
        );
      })}
    </div>
  );
}

ProductList.propTypes = {
  onDataFetch: PropTypes.func,
};

ProductList.defaultProps = {
  onDataFetch: undefined,
};

export default ProductList;
