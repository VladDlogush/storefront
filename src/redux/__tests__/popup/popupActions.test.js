import { openPopup, closePopup } from '../../popup/popupActions';
import TypesPopup from '../../popup/popupTypes';

describe('redux popup test', () => {
  let type;

  beforeEach(() => {
    type = 'cart';
  });
  it('openPopup', () => {
    const result = {
      type: TypesPopup.OPEN_POPUP,
      payload: { status: true, type },
    };
    expect(openPopup(type)).toEqual(result);
  });
  it('closePopup', () => {
    const result = {
      type: TypesPopup.CLOSE_POPUP,
      payload: { status: false, type },
    };
    expect(closePopup(type)).toEqual(result);
  });
});
