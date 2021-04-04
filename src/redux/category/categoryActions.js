import TypesProducts from './categoryTypes';

export const getProductsSuccess = payload => ({
  type: TypesProducts.GET_PRODUCTS_SUCCESS,
  payload,
});

export const getProductsFailure = payload => ({
  type: TypesProducts.GET_PRODUCTS_FAILURE,
  payload,
});
