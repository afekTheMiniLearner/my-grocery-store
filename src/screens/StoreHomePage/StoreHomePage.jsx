import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './StoreHomePage.scss';
import { CartConnected, ProductList } from '../../components';
import { Header, Loading } from '../../base-components';

export default function StoreHomePage() {
  const navigate = useNavigate;

  return fetchDataStatus ? (
    <div className="home-page-container">
      <Header title={'My grocery store'}>
        <button onClick={() => navigate('/product/new')}>
          Add new product
        </button>
        <CartConnected />
      </Header>
      <ProductList />
    </div>
  ) : (
    <Loading />
  );
}
