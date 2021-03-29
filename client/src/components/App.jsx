import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
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

const App = () => (
  <div>
    <Navigation />
    <Switch>
      <Route path="/" exact component={AsyncCategoryPage} />
      <Route path="/product/:productId" component={AsyncProductDetailsPage} />
      <Route path="/cart" component={AsyncShoppingCartPage} />
      <Route component={AsyncNotFoundPage} />
    </Switch>
    {false && <CartPopup />}
  </div>
);

export default App;
