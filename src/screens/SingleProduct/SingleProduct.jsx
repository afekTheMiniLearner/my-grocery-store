import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductsSelector } from "../../store";
import { ProductEditor } from "../../components";
import "./SingleProduct.scss";

export default function SingleProduct() {
  const products = useSelector((state) => getProductsSelector(state));
  const { productId } = useParams();
  const { productName, price } = products.find((p) => p.id === productId);

  return (
    <div className="single-product-page-container">
      <ProductEditor
        productId={productId}
        productName={productName}
        price={price}
      />
    </div>
  );
}
