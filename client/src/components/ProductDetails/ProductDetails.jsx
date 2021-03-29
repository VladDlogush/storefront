import React from 'react';
import product from '../../img/mashiko-yaki-green-small-plate.jpg';
import styles from './ProductDetails.module.css';

// eslint-disable-next-line react/prop-types
const ProductDetails = ({ match }) => {
  return (
    <div className={styles.padding}>
      <p className={styles.url}>HOME / PLATES / {match.params.productId}</p>
      <article className={styles.articleDetails}>
        <img className={styles.imgProduct} src={product} alt="product" />
        <div className={styles.productDescription}>
          <p className={styles.name}>Kiriko</p>
          <p className={styles.collection}>HAND PAINTED BLUE FLAT DISH</p>
          <p className={styles.price}>$28.00</p>
          <p className={styles.textDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            vel doloribus, exercitationem similique magni voluptas hic provident
            eveniet nulla natus asperiores ipsa numquam, rem, eos voluptatem
            placeat. Aut, adipisci quaerat?
          </p>
          <div className={styles.addProduct}>
            <div className={styles.counter}>
              <p className={styles.inputCounter}>1</p>
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
    </div>
  );
};

export default ProductDetails;

// сделать адаптивность
