import React from 'react';
import styles from './CartPopup.module.css';
import plates from '../../img/blue-stripe-stoneware-plate.jpg';
import cancelIcon from '../../img/cancel.png';

const CartPopup = () => {
  return (
    <div className={styles.div}>
      <ul className={styles.productList}>
        <li className={styles.item}>
          <img className={styles.imgProduct} src={plates} alt="product" />
          <div className={styles.description}>
            <p className={styles.collection}>HAND PAINTED BLUE FLAT DISH</p>
            <p className={styles.count}>x 1</p>
            <p className={styles.name}>KIRIKO</p>
            <p className={styles.price}>$28.00</p>
          </div>
          <button className={styles.cancelButton} type="button">
            <img
              className={styles.cancelImg}
              src={cancelIcon}
              alt="cancel icon"
            />
          </button>
        </li>
        <li className={styles.item}>
          <img className={styles.imgProduct} src={plates} alt="product" />
          <div className={styles.description}>
            <p className={styles.collection}>HAND PAINTED BLUE FLAT DISH</p>
            <p className={styles.count}>x 1</p>
            <p className={styles.name}>KIRIKO</p>
            <p className={styles.price}>$28.00</p>
          </div>
          <button className={styles.cancelButton} type="button">
            <img
              className={styles.cancelImg}
              src={cancelIcon}
              alt="cancel icon"
            />
          </button>
        </li>
      </ul>
      <div className={styles.divTotal}>
        <p className={styles.total}>TOTAL</p>
        <p className={styles.check}>$56.00</p>
      </div>
      <div className={styles.divButtons}>
        <button className={styles.view} type="button">
          VIEW CART
        </button>
        <button className={styles.checkout} type="button">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPopup;

// сделать адаптивность
