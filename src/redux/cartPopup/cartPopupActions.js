export const ActionCartPopup = {
  SET_CART_POPUP: 'SET_CART_POPUP',
  SET_OPEN_MODAL: 'SET_OPEN_MODAL',
  DELETE_ITEM_LIST: 'DELETE_ITEM_LIST',
  // SET_TOTAL: 'SET_TOTAL',
  // SET_COUNT_PRODUCTS: 'SET_COUNT_PRODUCTS',
  SET_QUANTITY: 'SET_QUANTITY',
  //  SET_PRICE: 'SET_PRICE',
};

export const setCartPopup = payload => ({
  type: ActionCartPopup.SET_CART_POPUP,
  payload,
});

export const setOpenModal = () => ({
  type: ActionCartPopup.SET_OPEN_MODAL,
});

export const deleteItemList = payload => ({
  type: ActionCartPopup.DELETE_ITEM_LIST,
  payload,
});

// export const setTotal = payload => ({
//   type: ActionCartPopup.SET_TOTAL,
//   payload,
// });

// export const setCountProducts = () => ({
//   type: ActionCartPopup.SET_COUNT_PRODUCTS,
// });

export const setQuantity = payload => ({
  type: ActionCartPopup.SET_QUANTITY,
  payload,
});

// export const setPrice = payload => ({
//   type: ActionCartPopup.SET_PRICE,
//   payload,
// });
