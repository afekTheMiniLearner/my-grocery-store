/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './ProductList.scss';
import { Loading, Product } from '@base-components';
import {
  addToCartAction,
  getProductsSelector,
  getSelectedProductsSelector,
  initProductsAction,
  removeFromCartAction,
} from '@store';
import { ProductsProxy } from '@utils';
import CreateProductButton from '../CreateProductButton/CreateProductButton';

function ProductList({
  products,
  selectedProducts,
  initProducts,
  onAdd,
  onRemove,
}) {
  const navigate = useNavigate();
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    ProductsProxy.getAllData()
      .then((data) => {
        if (!data) return;

        initProducts(data);
        setIsDataFetched(true);
      })
      .catch(() => {});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isDataFetched ? (
    <div className="product-list-container">
      <CreateProductButton />
      {products?.map((productData) => {
        const { id, productName, price } = productData;

        return (
          <Product
            key={id}
            productName={productName}
            price={+price}
            selectedCount={selectedProducts[id] ?? 0}
            onClick={() => navigate(`/product/${id}`)}
            onAdd={() => onAdd(id)}
            onRemove={() => onRemove(id)}
          />
        );
      })}
    </div>
  ) : (
    <Loading />
  );
}

const mapStateToProps = (state) => ({
  products: getProductsSelector(state),
  selectedProducts: getSelectedProductsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  initProducts: (newProducts) => {
    dispatch(initProductsAction({ products: newProducts }));
  },
  onAdd: (id) => {
    dispatch(addToCartAction({ id }));
  },
  onRemove: (id) => {
    dispatch(removeFromCartAction({ id }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
