import { checkingForAnEmptyArray } from '../utils';

describe('redux utils test', () => {
  it('checkingForAnEmptyArray should return not modified data', () => {
    const data = { cartList: [] };
    expect(checkingForAnEmptyArray(data)).toEqual(data);
  });

  // it('addDetailstProduct should return newCart with new product from Details Page', () => {
  //   const data = { cartList: [] };
  //   expect(addDetailstProduct(data)).toEqual(data);
  // });
});
