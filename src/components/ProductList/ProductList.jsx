import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './ProductList.scss';
import { Loading, Product } from '../../base-components';
import {
  addToCartAction,
  getProductsSelector,
  getSelectedProductsSelector,
  initProductsAction,
  removeFromCartAction,
} from '../../store';
import { ProductsProxy } from '../../utils';

function ProductList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDataFetched, setIsDataFetched] = useState(false);

  const { products, selectedProducts } = useSelector((state) => {
    return {
      products: getProductsSelector(state),
      selectedProducts: getSelectedProductsSelector(state),
    };
  });

  const onAdd = (id) => {
    dispatch(addToCartAction({ id }));
  };
  const onRemove = (id) => {
    dispatch(removeFromCartAction({ id }));
  };
  const initProducts = (newProducts) => {
    dispatch(initProductsAction({ products: newProducts }));
  };

  useEffect(() => {
    ProductsProxy.getAllData()
      .then((data) => {
        // To make sure the data isn't null
        if (!data) return;

        initProducts(data);
        setIsDataFetched(true);
      })
      .catch(() => {});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isDataFetched ? (
    <div className="product-list-container">
      {products?.map((productData) => {
        const { id, productName, price } = productData;

        return (
          <Product
            key={id}
            productName={productName}
            price={price}
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

export default ProductList;
