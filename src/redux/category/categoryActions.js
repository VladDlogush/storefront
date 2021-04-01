export const ActionProducts = {
  GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILURE: 'GET_PRODUCTS_FAILURE',
};

export const getProductsSelectorSuccess = payload => ({
  type: ActionProducts.GET_PRODUCTS_SUCCESS,
  payload,
});

export const getProductsSelectorFailure = payload => ({
  type: ActionProducts.GET_PRODUCTS_FAILURE,
  payload,
});
