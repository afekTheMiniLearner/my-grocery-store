import React from "react";

import { ProductCreator } from "../../components";
import "./NewProductPage.scss";

export default function NewProductPage() {
  return (
    <div className="single-product-page-container">
      <h1>Product creation page</h1>
      <ProductCreator />
    </div>
  );
}
