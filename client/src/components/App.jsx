import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Navigation from './Navigation/Navigation';
import Loader from './Loader';

const AsyncCategoryPage = Loadable({
  loader: () =>
    import('../pages/CategoryPage' /* webpackChunkName: "category-page" */),
  loading: Loader,
});

const AsyncProductDetalisPage = Loadable({
  loader: () =>
    import(
      '../pages/ProductDetalisPage' /* webpackChunkName: "product-detalis-page" */
    ),
  loading: Loader,
});

const AsyncShoppingCartPage = Loadable({
  loader: () =>
    import('../pages/ShoppingCartPage' /* webpackChunkName: "cart-page" */),
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
      <Route path="/product/:productId" component={AsyncProductDetalisPage} />
      <Route path="/cart" component={AsyncShoppingCartPage} />
      <Route component={AsyncNotFoundPage} />
    </Switch>
  </div>
);

export default App;
