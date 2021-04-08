import popupReducer, { initialState } from '../../popup/popupReducer';
import { openPopup, closePopup } from '../../popup/popupActions';

describe('popupReducer tests', () => {
  it('openPopup should set payload to store', () => {
    const type = 'cart';
    const payload = { status: true, type };
    const action = openPopup(type);
    expect(popupReducer(initialState, action)).toEqual(payload);
  });

  it('closePopup should set payload to store', () => {
    const type = 'cart';
    const payload = { status: false, type };
    const action = closePopup(type);
    expect(popupReducer(initialState, action)).toEqual(payload);
  });
});
