import TypesProducts from './categoryTypes';

export const initialState = {
  productList: [],
  error: '',
};

const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TypesProducts.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: payload,
      };
    case TypesProducts.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};

export default categoryReducer;
