import TypesCart from './cartTypes';

export const getProductsCartSuccess = payload => ({
  type: TypesCart.GET_PRODUCTS_CART_SUCCESS,
  payload,
});

export const getProductsCartFailure = payload => ({
  type: TypesCart.GET_PRODUCTS_CART_FAILURE,
  payload,
});

export const setCartPopupSuccess = payload => ({
  type: TypesCart.SET_CART_POPUP_SUCCESS,
  payload,
});

export const setCartPopupFailure = payload => ({
  type: TypesCart.SET_CART_POPUP_FAILURE,
  payload,
});

export const updateCartPopupSuccess = payload => ({
  type: TypesCart.UPDATE_CART_POPUP_SUCCESS,
  payload,
});

export const updateCartPopupFailure = payload => ({
  type: TypesCart.UPDATE_CART_POPUP_FAILURE,
  payload,
});

export const setOpenModal = () => ({
  type: TypesCart.SET_OPEN_MODAL,
});

export const setCloseModal = () => ({
  type: TypesCart.SET_CLOSE_MODAL,
});

export const deleteItemListSuccess = payload => ({
  type: TypesCart.DELETE_ITEM_LIST_SUCCESS,
  payload,
});

export const deleteItemListFailure = payload => ({
  type: TypesCart.DELETE_ITEM_LIST_FAILURE,
  payload,
});

export const setModalStatus = payload => ({
  type: TypesCart.SET_MODAL_STATUS,
  payload,
});
