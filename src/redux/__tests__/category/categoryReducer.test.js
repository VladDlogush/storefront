import categoryReducer, { initialState } from '../../category/categoryReducer';
import {
  getProductsSuccess,
  getProductsFailure,
} from '../../category/categoryActions';

describe('categoryReducer tests', () => {
  it('getProductsSuccess should set productList to store', () => {
    const payload = {};
    const action = getProductsSuccess({});
    const newState = {
      ...initialState,
      productList: payload,
    };
    expect(categoryReducer(initialState, action)).toEqual(newState);
  });

  it('getProductsFailure should set error to store', () => {
    const payload = {};
    const action = getProductsFailure(payload);
    const newState = {
      ...initialState,
      error: payload,
    };
    expect(categoryReducer(initialState, action)).toEqual(newState);
  });
});
