import TypesCart from './cartTypes';

export const initialState = {
  cartList: [],
  total: 0,
  countProducts: 0,
};

const cartPopupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TypesCart.GET_PRODUCTS_CART_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case TypesCart.GET_PRODUCTS_CART_FAILURE:
    case TypesCart.SET_CART_POPUP_FAILURE:
    case TypesCart.UPDATE_CART_POPUP_FAILURE:
    case TypesCart.DELETE_ITEM_LIST_FAILURE:
      return {
        ...state,
        error: payload,
      };
    case TypesCart.SET_CART_POPUP_SUCCESS:
    case TypesCart.UPDATE_CART_POPUP_SUCCESS:
    case TypesCart.DELETE_ITEM_LIST_SUCCESS:
      return payload;
    case TypesCart.SET_MODAL_STATUS:
      return {
        ...state,
        isOpenModal: payload,
      };

    default:
      return state;
  }
};

export default cartPopupReducer;
