import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./slices/products.slice";

export const storeConfig = () => {
  return configureStore({
    reducer: {
      products: productSlice.reducer,
    },
  });
};
