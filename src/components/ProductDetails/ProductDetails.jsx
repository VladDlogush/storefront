import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsSelector } from '../../redux/selectors';
import { getProductsSelectorOperation } from '../../redux/category/categoryOperations';
import styles from './ProductDetails.module.css';

// eslint-disable-next-line react/prop-types
const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const [currentProduct, setCurrentProduct] = useState(null);

  const productList = useSelector(state => getProductsSelector(state));

  useEffect(() => {
    dispatch(getProductsSelectorOperation());
    const { productId } = match.params;

    const value = productList.find(p => p.title === productId);

    setCurrentProduct(value);
  }, []);

  return (
    <div className={styles.padding}>
      <p className={styles.url}>HOME / PLATES / {match.params.productId}</p>
      {currentProduct && (
        <article className={styles.articleDetails}>
          <img
            className={styles.imgProduct}
            src={currentProduct.image}
            alt="product"
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
                <p className={styles.inputCounter}>{currentProduct.quantity}</p>
                <div className={styles.counterButtons}>
                  <button className={styles.buttonIncrement} type="button">
                    +
                  </button>
                  <button className={styles.buttonDecrement} type="button">
                    -
                  </button>
                </div>
              </div>
              <button className={styles.buttonAddCart} type="button">
                ADD TO CART
              </button>
            </div>
          </div>
        </article>
      )}
    </div>
  );
};

export default ProductDetails;
