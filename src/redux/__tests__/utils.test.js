import { checkingForAnEmptyArray } from '../utils';

describe('redux utils test', () => {
  it('checkingForAnEmptyArray should return not modified data', () => {
    const data = { cartList: [] };
    expect(checkingForAnEmptyArray(data)).toEqual(data);
  });
});
