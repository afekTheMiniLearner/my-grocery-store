import React from "react";
import {
  BrowserRouter,
  Route,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import StoreHomePage from "./StoreHomePage/StoreHomePage";
import SingleProduct from "./SingleProduct/SingleProduct";
import NotFound from "./NotFound/NotFound";
import NewProductPage from "./NewProductPage/NewProductPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<StoreHomePage />} />
        <Route path="/product/new" element={<NewProductPage />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/not-found-404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found-404" />} />
      </Switch>
    </BrowserRouter>
  );
}
