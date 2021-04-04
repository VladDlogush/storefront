import http from '../../REST/http';
import { getCartSelector } from '../selectors';
import {
  setCartPopupSuccess,
  setCartPopupFailure,
  updateCartPopupSuccess,
  updateCartPopupFailure,
  deleteItemListSuccess,
  deleteItemListFailure,
  getProductsCartSuccess,
  getProductsCartFailure,
} from './cartActions';
import {
  updateCart,
  deleteFromCart,
  addDetailstProduct,
  addProduct,
} from '../utils';

// get
export const getProductsCartOperation = () => dispatch => {
  http
    .getCart()
    .then(({ data }) => {
      dispatch(getProductsCartSuccess(data));
    })
    .catch(error => dispatch(getProductsCartFailure(error)));
};

// post
export const addProductToCartOperation = (product, type) => (
  dispatch,
  getState,
) => {
  const cart = getCartSelector(getState());

  const newCart =
    type === 'details'
      ? addDetailstProduct(cart, product)
      : addProduct(cart, product);

  http
    .putCart(newCart)
    .then(({ data }) => {
      dispatch(setCartPopupSuccess(data));
    })
    .catch(error => dispatch(setCartPopupFailure(error)));
};

// put
export const updateProductInCartOperation = (id, action) => (
  dispatch,
  getState,
) => {
  const cart = getCartSelector(getState());
  const updatedCart = updateCart(cart, id, action);

  http
    .putCart(updatedCart)
    .then(({ data }) => {
      dispatch(updateCartPopupSuccess(data));
    })
    .catch(error => dispatch(updateCartPopupFailure(error)));
};

// delete
export const deleteProductOperation = id => (dispatch, getState) => {
  const cart = getCartSelector(getState());
  const updatedCart = deleteFromCart(cart, id);

  http
    .putCart(updatedCart)
    .then(({ data }) => {
      dispatch(deleteItemListSuccess(data));
    })
    .catch(error => dispatch(deleteItemListFailure(error)));
};
