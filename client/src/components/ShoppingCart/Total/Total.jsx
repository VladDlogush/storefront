import React from 'react';
import styles from './Total.module.css';

const Total = () => {
  return (
    <>
      <div className={styles.totalCheck}>
        <div className={styles.totalName}>
          <p className={styles.cartOverview}>CART OVERVIEW</p>
          <p className={styles.cartOverview}>SUBTOTAL</p>
          <p className={styles.cartOverview}>TOTAL</p>
        </div>
        <div className={styles.totalPrice}>
          <p className={styles.price}>$56.00</p>
          <p className={styles.priceCAD}>$56.00 CAD</p>
        </div>
      </div>
      <div className={styles.footerCheck}>
        <button className={styles.buttonContinue} type="button">
          CONTINUE SHOPPING
        </button>
        <button className={styles.buttonCheckout} type="button">
          CHECKOUT ($56.00)
        </button>
      </div>
    </>
  );
};

export default Total;
