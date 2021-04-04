/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsSelector } from '../../redux/selectors';
import { getProductsOperation } from '../../redux/category/categoryOperations';
import { addProductToCartOperation } from '../../redux/cart/cartOperations';
import styles from './ProductDetails.module.css';

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [productCount, setProductCount] = useState(0);

  const productList = useSelector(state => getProductsSelector(state));

  useEffect(() => {
    dispatch(getProductsOperation());
    const { productId } = match.params;

    const value = productList.find(p => p.title === productId);

    setCurrentProduct(value);
  }, []);

  const addProductToCart = () => {
    const newProduct = {
      ...currentProduct,
      quantity: productCount,
    };

    dispatch(addProductToCartOperation(newProduct, 'details'));
    setProductCount(0);
  };

  return (
    <div className={styles.padding}>
      <p className={styles.url}>HOME / PLATES / {match.params.productId}</p>
      {currentProduct && (
        <article className={styles.articleDetails}>
          <img
            className={styles.imgProduct}
            src={require(`../../img/${currentProduct.image}`)}
            alt={currentProduct.title}
          />
          <div className={styles.productDescription}>
            <p className={styles.name}>{currentProduct.brand}</p>
            <p className={styles.collection}>{currentProduct.title}</p>
            <p className={styles.price}>${currentProduct.price}.00</p>
            <p className={styles.textDescription}>
              {currentProduct.description}
            </p>
            <div className={styles.addProduct}>
              <div className={styles.counter}>
                <p className={styles.inputCounter}>{productCount}</p>
                <div className={styles.counterButtons}>
                  <button
                    onClick={() => setProductCount(productCount + 1)}
                    className={styles.buttonIncrement}
                    type="button"
                  >
                    +
                  </button>
                  <button
                    disabled={productCount === 1}
                    onClick={() => setProductCount(productCount - 1)}
                    className={styles.buttonDecrement}
                    type="button"
                  >
                    -
                  </button>
                </div>
              </div>
              <button
                onClick={addProductToCart}
                className={styles.buttonAddCart}
                type="button"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </article>
      )}
    </div>
  );
};

ProductDetails.defaultProps = {
  match: {},
};

ProductDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
};

export default ProductDetails;

// возможно деструктиризация
