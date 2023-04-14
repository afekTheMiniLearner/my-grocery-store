import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '@base-components';
import { CreateProduct } from '@components';

export default function ProductCreatorPage() {
  const navigate = useNavigate();
  return (
    <div className="product-modifier-container">
      <Header title="Create product:" />
      <CreateProduct navigateCB={() => navigate('/')} />
    </div>
  );
}
