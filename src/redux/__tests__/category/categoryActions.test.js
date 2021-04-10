import {
  getProductsSuccess,
  getProductsFailure,
} from '../../category/categoryActions';
import TypesProducts from '../../category/categoryTypes';

describe('redux category test', () => {
  let payload;

  beforeEach(() => {
    payload = {};
  });
  it('getProductsSuccess', () => {
    const result = {
      type: TypesProducts.GET_PRODUCTS_SUCCESS,
      payload,
    };
    expect(getProductsSuccess(payload)).toEqual(result);
  });

  it('getProductsFailure', () => {
    const result = {
      type: TypesProducts.GET_PRODUCTS_FAILURE,
      payload,
    };
    expect(getProductsFailure(payload)).toEqual(result);
  });
});
