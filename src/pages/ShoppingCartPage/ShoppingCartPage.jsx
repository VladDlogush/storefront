import React from 'react';
import CheckList from '../../components/ShoppingCart/CheckList/CheckList';
import Total from '../../components/ShoppingCart/Total/Total';
import styles from './ShoppingCartPage.module.css';

const ShoppingCartPage = () => (
  <div className={styles.background}>
    <p className={styles.titleCart}>Shopping Cart</p>
    <article className={styles.articleCart}>
      <CheckList />
      <Total />
    </article>
  </div>
);

export default ShoppingCartPage;
