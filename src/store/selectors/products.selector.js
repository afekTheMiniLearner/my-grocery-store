export const getProductsSelector = (state) => state.products.productList;
export const getSelectedProductsSelector = (state) => {
  return state.products.selectedProducts;
};
export const getTotalPriceSelector = (state) => state.products.totalPrice;
