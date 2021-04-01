// category
export const getProductsSelector = state => state.product.productList;

// cart popup
export const getCartPopupListSelector = state => state.cart.cartList;
export const getOpenModalSelector = state => state.cart.isOpenModal;
export const getTotalSelector = state => state.cart.total;
export const getCountProductsSelector = state => state.cart.countProducts;
export const getCountOrderProductSelector = state =>
  state.cart.countOrderProduct;
