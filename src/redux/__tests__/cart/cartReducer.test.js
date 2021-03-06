import cartPopupReducer, { initialState } from '../../cart/cartReducer';
import {
  getProductsCartSuccess,
  getProductsCartFailure,
  deleteItemListSuccess,
  deleteItemListFailure,
  setCartPopupSuccess,
  setCartPopupFailure,
  updateCartPopupSuccess,
  updateCartPopupFailure,
  setModalStatus,
} from '../../cart/cartActions';

describe('cartPopupReducer tests', () => {
  let payload;

  beforeEach(() => {
    payload = {};
  });
  it('getProductsCartSuccess should set payload to store', () => {
    const action = getProductsCartSuccess({});
    const newState = {
      ...initialState,
      ...payload,
    };
    expect(cartPopupReducer(initialState, action)).toEqual(newState);
  });
  it('deleteItemListFailure should set error to store', () => {
    const action = deleteItemListFailure(payload);
    const newState = {
      ...initialState,
      error: payload,
    };
    expect(cartPopupReducer(initialState, action)).toEqual(newState);
  });

  it('getProductsCartFailure should set error to store', () => {
    const action = getProductsCartFailure(payload);
    const newState = {
      ...initialState,
      error: payload,
    };
    expect(cartPopupReducer(initialState, action)).toEqual(newState);
  });

  it('setCartPopupFailure should set error to store', () => {
    const action = setCartPopupFailure(payload);
    const newState = {
      ...initialState,
      error: payload,
    };
    expect(cartPopupReducer(initialState, action)).toEqual(newState);
  });

  it('updateCartPopupFailure should set error to store', () => {
    const action = updateCartPopupFailure(payload);
    const newState = {
      ...initialState,
      error: payload,
    };
    expect(cartPopupReducer(initialState, action)).toEqual(newState);
  });

  it('setCartPopupSuccess should set payload to store', () => {
    const action = setCartPopupSuccess(payload);
    expect(cartPopupReducer(initialState, action)).toEqual(payload);
  });

  it('updateCartPopupSuccess should set payload to store', () => {
    const action = updateCartPopupSuccess(payload);
    expect(cartPopupReducer(initialState, action)).toEqual(payload);
  });

  it('deleteItemListSuccess should set payload to store', () => {
    const action = deleteItemListSuccess(payload);
    expect(cartPopupReducer(initialState, action)).toEqual(payload);
  });

  it('setModalStatus should set isOpenModal to store', () => {
    const action = setModalStatus(payload);
    const newState = {
      ...initialState,
      isOpenModal: payload,
    };
    expect(cartPopupReducer(initialState, action)).toEqual(newState);
  });
});
