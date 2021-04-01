import { ActionCartPopup } from './cartPopupActions';

const initialState = {
  cartList: [],
  isOpenModal: false,
  total: null,
  countProducts: 0,
};

const cartPopupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionCartPopup.SET_CART_POPUP:
      console.log(payload);
      return {
        ...state,
        cartList: [...state.cartList, payload],
      };
    case ActionCartPopup.SET_OPEN_MODAL:
      return {
        ...state,
        isOpenModal: !state.isOpenModal,
      };
    case ActionCartPopup.DELETE_ITEM_LIST:
      return {
        ...state,
        cartList: state.cartList.filter(item => item.id !== payload),
        // countProducts: state.countProducts - state.cartList.length,
      };
    // case ActionCartPopup.SET_TOTAL:
    //   return {
    //     ...state,
    //     total: payload,
    //   };
    // case ActionCartPopup.SET_COUNT_PRODUCTS:
    //   return {
    //     ...state,
    //     countProducts: state.cartList.length + 1,
    //   };
    case ActionCartPopup.SET_QUANTITY:
      console.log(payload);
      return {
        ...state,
        // countOrderProduct: state.countOrderProduct + 1,
        cartList: state.cartList.map(item =>
          item.id === payload.id
            ? { ...item, quantity: (item.quantity += 1) }
            : item,
        ),
      };
    // case ActionCartPopup.SET_PRICE:
    //   console.log(payload);
    //   return {
    //     ...state,
    //     // countOrderProduct: state.countOrderProduct + 1,
    //     cartList: state.cartList.map(item =>
    //       item.id === payload.id
    //         ? { ...item, quantity: (item.quantity += 1) }
    //         : item,
    //     ),
    //   };

    default:
      return state;
  }
};

export default cartPopupReducer;
