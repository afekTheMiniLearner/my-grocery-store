import React from 'react';

import { CartConnected, ProductList } from '@components';
import { Header } from '@base-components';

export default function StoreHomePage() {
  return (
    <div>
      <Header
        title="Prime choice grocery store
"
      >
        <CartConnected />
      </Header>
      <ProductList />
    </div>
  );
}
