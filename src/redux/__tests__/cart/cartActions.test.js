import {
  getProductsCartSuccess,
  getProductsCartFailure,
  setCartPopupSuccess,
  setCartPopupFailure,
  updateCartPopupSuccess,
  updateCartPopupFailure,
  deleteItemListSuccess,
  deleteItemListFailure,
  setModalStatus,
} from '../../cart/cartActions';
import TypesCart from '../../cart/cartTypes';

describe('redux cartActions test', () => {
  it('getProductsCartSuccess', () => {
    const payload = {};
    const result = {
      type: TypesCart.GET_PRODUCTS_CART_SUCCESS,
      payload,
    };
    expect(getProductsCartSuccess(payload)).toEqual(result);
  });

  it('getProductsCartFailure', () => {
    const payload = {};
    const result = {
      type: TypesCart.GET_PRODUCTS_CART_FAILURE,
      payload,
    };
    expect(getProductsCartFailure(payload)).toEqual(result);
  });

  it('setCartPopupSuccess', () => {
    const payload = {};
    const result = {
      type: TypesCart.SET_CART_POPUP_SUCCESS,
      payload,
    };
    expect(setCartPopupSuccess(payload)).toEqual(result);
  });

  it('setCartPopupFailure', () => {
    const payload = {};
    const result = {
      type: TypesCart.SET_CART_POPUP_FAILURE,
      payload,
    };
    expect(setCartPopupFailure(payload)).toEqual(result);
  });

  it('updateCartPopupSuccess', () => {
    const payload = {};
    const result = {
      type: TypesCart.UPDATE_CART_POPUP_SUCCESS,
      payload,
    };
    expect(updateCartPopupSuccess(payload)).toEqual(result);
  });

  it('updateCartPopupFailure', () => {
    const payload = {};
    const result = {
      type: TypesCart.UPDATE_CART_POPUP_FAILURE,
      payload,
    };
    expect(updateCartPopupFailure(payload)).toEqual(result);
  });

  it('deleteItemListSuccess', () => {
    const payload = {};
    const result = {
      type: TypesCart.DELETE_ITEM_LIST_SUCCESS,
      payload,
    };
    expect(deleteItemListSuccess(payload)).toEqual(result);
  });

  it('deleteItemListFailure', () => {
    const payload = {};
    const result = {
      type: TypesCart.DELETE_ITEM_LIST_FAILURE,
      payload,
    };
    expect(deleteItemListFailure(payload)).toEqual(result);
  });

  it('setModalStatus', () => {
    const payload = {};
    const result = {
      type: TypesCart.SET_MODAL_STATUS,
      payload,
    };
    expect(setModalStatus(payload)).toEqual(result);
  });
});
