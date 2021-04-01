import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { getOpenModalSelector } from '../redux/selectors';
import Navigation from './Navigation/Navigation';
import Loader from './Loader';
import CartPopup from './CartPopup/CartPopup';

const AsyncCategoryPage = Loadable({
  loader: () =>
    import('../pages/CategoryPage' /* webpackChunkName: "category-page" */),
  loading: Loader,
});

const AsyncProductDetailsPage = Loadable({
  loader: () =>
    import(
      '../pages/ProductDetailsPage' /* webpackChunkName: "product-details-page" */
    ),
  loading: Loader,
});

const AsyncShoppingCartPage = Loadable({
  loader: () =>
    import(
      '../pages/ShoppingCartPage/ShoppingCartPage' /* webpackChunkName: "cart-page" */
    ),
  loading: Loader,
});

const AsyncNotFoundPage = Loadable({
  loader: () =>
    import(
      '../pages/NotFoundPage.jsx' /* webpackChunkName: "not-found-page" */
    ),
  loading: Loader,
});

const App = () => {
  const isOpenModal = useSelector(state => getOpenModalSelector(state));

  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/products" exact component={AsyncCategoryPage} />
        <Route
          path="/products/:productId"
          component={AsyncProductDetailsPage}
        />
        <Route path="/cart" component={AsyncShoppingCartPage} />
        <Route component={AsyncNotFoundPage} />
      </Switch>
      {isOpenModal && <CartPopup />}
    </div>
  );
};

export default App;
