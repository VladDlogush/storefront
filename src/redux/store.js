import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import categoryReducer from './category/categoryReducer';
import cartPopupReducer from './cartPopup/cartPopupReducer';

const rootReducer = combineReducers({
  cart: cartPopupReducer,
  product: categoryReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk)),
);

export default store;
