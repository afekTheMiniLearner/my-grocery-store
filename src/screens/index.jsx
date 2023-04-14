import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as Switch,
  Navigate,
} from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import ProductEditorPage from './ProductEditorPage/ProductEditorPage';
import ProductCreatorPage from './ProductCreatorPage/ProductCreatorPage';
import './index.scss';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/new" element={<ProductCreatorPage />} />
        <Route path="/product/:id" element={<ProductEditorPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}
