import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../setupTest';
import ProductList from '../components/Category/ProductList/ProductList';
import App from '../components/App';

it('should be valid', () => {
  const wrapped = shallow(<ProductList />);

  shallow(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(wrapped.find('block'));
});
