import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as Switch,
  Navigate,
} from 'react-router-dom';
import StoreHomePage from './StoreHomePage/StoreHomePage';
import EditProduct from './EditProduct/EditProduct';
import NotFound from './NotFound/NotFound';
import NewProductPage from './NewProductPage/NewProductPage';
import './index.scss';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<StoreHomePage />} />
        <Route path="/product/new" element={<NewProductPage />} />
        <Route path="/product/:productId" element={<EditProduct />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Switch>
    </BrowserRouter>
  );
}
