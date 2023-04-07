import React from 'react';
import { useNavigate } from 'react-router-dom';

import './HomePage.scss';
import { CartConnected, ProductList } from '@components';
import { Header, ActionButton } from '@base-components';

export default function StoreHomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page-container">
      <Header title="My grocery store">
        <ActionButton
          label="Create product"
          onClickHandler={() => navigate('/product/new')}
          classes="circular-button"
        />
        <CartConnected />
      </Header>
      <ProductList />
    </div>
  );
}
