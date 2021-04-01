import { ActionProducts } from './categoryActions';

const initialState = {
  productList: [],
  error: '',
};

const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionProducts.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: payload,
      };
    case ActionProducts.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};

export default categoryReducer;
