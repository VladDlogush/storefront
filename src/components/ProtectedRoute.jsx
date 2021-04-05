import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.location.pathname === '/' ? (
        <Redirect to="/products" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default ProtectedRoute;
