import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getProductsSelector } from '../../store';
import { Header } from '../../base-components';
import { ProductEditor } from '../../components';

export default function EditProduct() {
  const products = useSelector((state) => getProductsSelector(state));
  const { id } = useParams();
  const { productName, price } = products.find((p) => p.id === id);

  return (
    <div className="product-modify-container">
      <Header title="Edit product:" />
      <ProductEditor id={id} productName={productName} price={price} />
    </div>
  );
}
