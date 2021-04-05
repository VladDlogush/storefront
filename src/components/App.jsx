import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { getProductsCartOperation } from '../redux/cart/cartOperations';
import Navigation from './Navigation/Navigation';
import Loader from './Loader';
import ProtectedRoute from './ProtectedRoute';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsCartOperation());
  }, []);

  return (
    <div>
      <Navigation />
      <Switch>
        <ProtectedRoute path="/products" exact component={AsyncCategoryPage} />
        <ProtectedRoute
          path="/products/:productId"
          component={AsyncProductDetailsPage}
        />
        <ProtectedRoute path="/cart" component={AsyncShoppingCartPage} />
        <ProtectedRoute component={AsyncNotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
