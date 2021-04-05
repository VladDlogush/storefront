/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ProductList.module.css';
import { getProductsOperation } from '../../../redux/category/categoryOperations';
import { getProductsSelector } from '../../../redux/selectors';
import { addProductToCartOperation } from '../../../redux/cart/cartOperations';

const ProductList = ({ match }) => {
  const dispatch = useDispatch();

  const productList = useSelector(state => getProductsSelector(state));

  useEffect(() => {
    dispatch(getProductsOperation());
  }, []);

  const addProductToCart = product => {
    dispatch(addProductToCartOperation(product, 'list'));
  };

  return (
    <div>
      <ul className={styles.block}>
        {productList &&
          productList.map(product => (
            <li className={styles.positionPhoto} key={product.id}>
              <article className={styles.featuresListItem}>
                <img
                  className={styles.imgProduct}
                  src={require(`../../../img/${product.image}`)}
                  alt={product.title}
                />
                <div className={styles.blocks}>
                  <div className={styles.iconsWrapperWide}>
                    <Link
                      style={{ textDecoration: 'none' }}
                      to={{
                        pathname: `${match.path}/${product.title}`,
                      }}
                    >
                      <button type="button" className={styles.textIcon}>
                        VIEW DETAILS
                      </button>
                    </Link>
                  </div>
                  <div className={styles.iconsWrapperWide}>
                    <button
                      type="button"
                      className={styles.textIcon}
                      onClick={() => addProductToCart(product)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <div className={styles.productPrice}>
                  <p className={styles.name}>{product.brand}</p>
                  <p className={styles.collection}>{product.title}</p>
                  <p className={styles.price}>${product.price}.00</p>
                </div>
              </article>
            </li>
          ))}
      </ul>
    </div>
  );
};

ProductList.defaultProps = {
  match: {},
};

ProductList.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
};

export default ProductList;
