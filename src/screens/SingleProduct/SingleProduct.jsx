import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductsSelector } from "../../store";
import { ProductEditor } from "../../components";

export default function SingleProduct() {
  const products = useSelector((state) => getProductsSelector(state));
  const { productName, price } = products?.find((p) => p.id === productId);
  const { productId } = useParams();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "1000px",
        height: "700px",
      }}
    >
      <ProductEditor
        productId={productId}
        productName={productName}
        price={price}
      />
    </div>
  );
}
