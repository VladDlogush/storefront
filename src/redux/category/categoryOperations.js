import http from '../../REST/http';

import {
  getProductsSelectorSuccess,
  getProductsSelectorFailure,
} from './categoryActions';

// eslint-disable-next-line import/prefer-default-export
export const getProductsSelectorOperation = () => dispatch => {
  http
    .getProductsSelector()
    .then(({ data }) => {
      dispatch(getProductsSelectorSuccess(data));
    })
    .catch(error => dispatch(getProductsSelectorFailure(error)));
};
