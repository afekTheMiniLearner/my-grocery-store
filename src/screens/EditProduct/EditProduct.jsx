import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Header, Loading } from '@base-components';
import { ProductEditor } from '@components';
import { ProductsProxy } from '@utils';

export default function EditProduct() {
  const [isDataFetched, setIsDataFetched] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const productData = useRef({
    productName: undefined,
    price: undefined,
  });

  useEffect(() => {
    ProductsProxy.getData(id)
      .then((data) => {
        productData.current.productName = data.productName;
        productData.current.price = data.price;
        setIsDataFetched(true);
      })
      .catch(() => {});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isDataFetched ? (
    <div className="product-modifier-container">
      <Header title="Edit product:" />
      <ProductEditor
        id={id}
        productName={productData.current.productName}
        price={+productData.current.price}
        navigateCB={() => navigate('/')}
      />
    </div>
  ) : (
    <Loading />
  );
}
