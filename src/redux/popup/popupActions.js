import TypesPopup from './popupTypes';

export const openPopup = type => ({
  type: TypesPopup.OPEN_POPUP,
  payload: { status: true, type },
});

export const closePopup = type => ({
  type: TypesPopup.CLOSE_POPUP,
  payload: { status: false, type },
});
