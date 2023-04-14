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
import NotFound from './NotFound/NotFound';
import './index.scss';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/new" element={<ProductCreatorPage />} />
        <Route path="/product/:id" element={<ProductEditorPage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Switch>
    </BrowserRouter>
  );
}
