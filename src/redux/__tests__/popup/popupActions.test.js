import { openPopup, closePopup } from '../../popup/popupActions';
import TypesPopup from '../../popup/popupTypes';

describe('redux popup test', () => {
  it('openPopup', () => {
    const type = 'cart';
    const result = {
      type: TypesPopup.OPEN_POPUP,
      payload: { status: true, type },
    };
    expect(openPopup(type)).toEqual(result);
  });
  it('closePopup', () => {
    const type = 'cart';
    const result = {
      type: TypesPopup.CLOSE_POPUP,
      payload: { status: false, type },
    };
    expect(closePopup(type)).toEqual(result);
  });
});
