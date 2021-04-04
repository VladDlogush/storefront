import http from '../../REST/http';

import { getProductsSuccess, getProductsFailure } from './categoryActions';

// eslint-disable-next-line import/prefer-default-export
export const getProductsOperation = () => dispatch => {
  http
    .getProducts()
    .then(({ data }) => {
      dispatch(getProductsSuccess(data));
    })
    .catch(error => dispatch(getProductsFailure(error)));
};
