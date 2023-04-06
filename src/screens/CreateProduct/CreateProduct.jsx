import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../base-components';
import { ProductCreator } from '../../components';

export default function CreateProduct() {
  const navigate = useNavigate();
  return (
    <div className="product-modify-container">
      <Header title="Create product:" />
      <ProductCreator navigateCB={() => navigate('/')} />
    </div>
  );
}
