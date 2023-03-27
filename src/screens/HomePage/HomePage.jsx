import React from 'react';
import { useNavigate } from 'react-router-dom';

import './HomePage.scss';
import { CartConnected, ProductList } from '../../components';
import { Header, ActionButton } from '../../base-components';

export default function StoreHomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page-container">
      <Header title="My grocery store">
        <ActionButton
          label="Create new product"
          onClickHandler={() => navigate('/product/new')}
        />
        <CartConnected />
      </Header>
      <ProductList />
    </div>
  );
}
