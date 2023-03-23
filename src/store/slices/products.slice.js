import { createSlice } from "@reduxjs/toolkit";
import { mockProducts } from "../../utils";

const productSlice = createSlice({
  name: "products",
  initialState: {
    productList: mockProducts,
    selectedProducts: {},
    totalPrice: 0,
  },
  reducers: {
    initProducts(state, action) {
      state.productList = action.payload;
    },
    addToCart(state, action) {
      const productId = action.payload.productId;
      const { price } = state.productList.find((p) => p.id === productId);

      state.selectedProducts[productId] ||= 0;
      state.selectedProducts[productId]++;
      state.totalPrice = parseFloat(
        Number(state.totalPrice + price).toFixed(2)
      );
    },
    removeFromCart(state, action) {
      const productId = action.payload.productId;
      const { price } = state.productList.find((p) => p.id === productId);

      if (state.selectedProducts[productId]) {
        state.selectedProducts[productId]--;
      }

      console.table({ totalPrice: state.totalPrice, price });
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
