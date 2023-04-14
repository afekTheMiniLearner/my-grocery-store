import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    productList: [],
    selectedProducts: {},
    totalPrice: 0,
  },
  reducers: {
    initProducts(state, action) {
      state.productList = action.payload.products;
    },
    addToCart(state, action) {
      const { id } = action.payload;

      const { price } = state.productList.find((p) => p.id === id);

      state.selectedProducts[id] ||= 0;
      state.selectedProducts[id]++;
      state.totalPrice = parseFloat(
        Number(state.totalPrice + +price).toFixed(2)
      );
    },
    removeFromCart(state, action) {
      const { id } = action.payload;
      const { price } = state.productList.find((p) => p.id === id);

      if (state.selectedProducts[id]) {
        state.selectedProducts[id]--;
      }

      state.totalPrice = parseFloat(
        Number(state.totalPrice - price).toFixed(2)
      );
    },
  },
});

export const {
  initProducts: initProductsAction,
  addToCart: addToCartAction,
  removeFromCart: removeFromCartAction,
} = productSlice.actions;

export default productSlice;
