import TypesPopup from './popupTypes';

const initialState = {
  status: false,
  type: '',
};

const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TypesPopup.OPEN_POPUP:
    case TypesPopup.CLOSE_POPUP:
      return payload;

    default:
      return state;
  }
};

export default categoryReducer;
