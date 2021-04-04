import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalSelector } from '../../../redux/selectors';
import styles from './Total.module.css';

const Total = () => {
  const total = useSelector(state => getTotalSelector(state));

  return (
    <>
      <div className={styles.totalCheck}>
        <div className={styles.totalName}>
          <p className={styles.cartOverview}>CART OVERVIEW</p>
          <p className={styles.cartOverview}>SUBTOTAL</p>
          <p className={styles.cartOverview}>TOTAL</p>
        </div>
        <div className={styles.totalPrice}>
          <p className={styles.price}>${total}.00</p>
          <p className={styles.priceCAD}>${total}.00 CAD</p>
        </div>
      </div>
      <div className={styles.footerCheck}>
        <Link style={{ textDecoration: 'none' }} to="/products">
          <button className={styles.buttonContinue} type="button">
            CONTINUE SHOPPING
          </button>
        </Link>
        <button className={styles.buttonCheckout} type="button">
          CHECKOUT (${total}.00)
        </button>
      </div>
    </>
  );
};

export default Total;
