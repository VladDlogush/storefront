import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { getProductsCartOperation } from '../redux/cart/cartOperations';
import { getPopupStatusSelector } from '../redux/selectors';
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
  const dispatch = useDispatch();
  const isOpenPopup = useSelector(state => getPopupStatusSelector(state));

  useEffect(() => {
    dispatch(getProductsCartOperation());
  }, []);

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
      {isOpenPopup && <CartPopup />}
    </div>
  );
};

export default App;
