import TypesPopup from './popupTypes';

export const initialState = {
  status: false,
  type: '',
};

const popupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TypesPopup.OPEN_POPUP:
    case TypesPopup.CLOSE_POPUP:
      return payload;

    default:
      return state;
  }
};

export default popupReducer;
