// category
export const getProductsSelector = state => state.product.productList;

// cart
export const getCartPopupListSelector = state => state.cart.cartList;
export const getCartSelector = state => state.cart;
export const getCartProductsCountSelector = state => state.cart.countProducts;
export const getTotalSelector = state => state.cart.total;
export const getCountProductsSelector = state => state.cart.countProducts;
export const getCountOrderProductSelector = state =>
  state.cart.countOrderProduct;

// popup
export const getPopupStatusSelector = state => state.popup.status;
