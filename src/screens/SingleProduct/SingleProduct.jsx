import React from "react";
import { useParams } from "react-router-dom";

import { ProductEditor } from "../../components";
import { mockProducts } from "../../utils";

export default function SingleProduct() {
  const { productId } = useParams();
  const { productName, price } = mockProducts.find((p) => p.id === productId);

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
