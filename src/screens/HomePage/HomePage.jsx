import React from 'react';
import { useNavigate } from 'react-router-dom';

import './HomePage.scss';
import { CartConnected, ProductList } from '../../components';
import { Header } from '../../base-components';

export default function StoreHomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page-container">
      <Header title="My grocery store">
        <button onClick={() => navigate('/product/new')}>
          Add new product
        </button>
        <CartConnected />
      </Header>
      <ProductList />
    </div>
  );
}
