import React from 'react';

import { Header } from '../../base-components';
import { ProductCreator } from '../../components';

export default function CreateProduct() {
  return (
    <div className="product-modify-container">
      <Header title="Create product:"></Header>
      <ProductCreator />
    </div>
  );
}
