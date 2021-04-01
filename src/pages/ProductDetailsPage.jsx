import React from 'react';
import PropTypes from 'prop-types';
import ProductDetails from '../components/ProductDetails/ProductDetails';

const ProductDetailsPage = ({ match }) => <ProductDetails match={match} />;

ProductDetailsPage.defaultProps = {
  match: {},
};

ProductDetailsPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
};

export default ProductDetailsPage;
