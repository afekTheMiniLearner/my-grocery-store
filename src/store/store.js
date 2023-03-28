import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

import productSlice from './slices/products.slice';

export const storeConfig = () => {
  return configureStore(
    {
      reducer: {
        products: productSlice.reducer,
      },
    },
    // Only for development uses, delete in production
    composeWithDevTools()
  );
};
