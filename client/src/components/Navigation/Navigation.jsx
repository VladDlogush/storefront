import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import logo from '../../img/logo.png';

const Navigation = () => (
  <nav className={styles.nav}>
    <NavLink to="/" exact>
      <img src={logo} alt="logo" className={styles.logo} />
    </NavLink>
    <ul className={styles.ul}>
      <li className={styles.linkHome}>
        <NavLink to="/" exact className={styles.navLink}>
          HOME
        </NavLink>
      </li>
      <li className={styles.linkShop}>
        <NavLink to="/shop" className={styles.navLink}>
          SHOP
        </NavLink>
      </li>
      <li className={styles.linkJournal}>
        <NavLink to="/journal" className={styles.navLink}>
          JOURNAL
        </NavLink>
      </li>
      <li className={styles.linkMore}>
        <NavLink to="/more" className={styles.navLink}>
          MORE
        </NavLink>
      </li>
    </ul>
    <button type="button" className={styles.buttonCart}>
      MY CART (2)
    </button>
  </nav>
);

export default Navigation;
