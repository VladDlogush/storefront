import React from 'react';
import styles from './ProductList.module.css';
import plates from '../../../img/blue-stripe-stoneware-plate.jpg';

const ProductList = () => {
  return (
    <div>
      <ul className={styles.block}>
        <li className={styles.positionPhoto}>
          <article className={styles.featuresListItem}>
            <img className={styles.imgProduct} src={plates} alt="product" />
            <div className={styles.blocks}>
              <div className={styles.iconsWrapperWide}>
                <p className={styles.textIcon}>VIEW DETALIS</p>
              </div>
              <div className={styles.iconsWrapperWide}>
                <p className={styles.textIcon}>ADD TO CART</p>
              </div>
            </div>
            <div className={styles.productPrice}>
              <p className={styles.name}>BLUE TSHIRT</p>
              <p className={styles.collection}>BLUE TSHIRT</p>
              <p className={styles.price}>BLUE TSHIRT</p>
            </div>
          </article>
        </li>
      </ul>
    </div>
  );
};

export default ProductList;
