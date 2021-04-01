import React from 'react';
import PropTypes from 'prop-types';
import DescriptionProduct from '../components/Category/DescriptionProduct/DescriptionProduct';
import ProductList from '../components/Category/ProductList/ProductList';

const CategoryPage = ({ match }) => (
  <>
    <DescriptionProduct />
    <ProductList match={match} />
  </>
);

CategoryPage.defaultProps = {
  match: {},
};

CategoryPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
};

export default CategoryPage;
