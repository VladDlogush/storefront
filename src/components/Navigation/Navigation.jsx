import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import logo from '../../img/logo.png';
import { openPopup } from '../../redux/popup/popupActions';
import { getCartProductsCountSelector } from '../../redux/selectors';

const Navigation = () => {
  const dispatch = useDispatch();
  const countProducts = useSelector(state =>
    getCartProductsCountSelector(state),
  );

  const openCart = () => dispatch(openPopup('cart'));

  return (
    <nav className={styles.nav} data-testid="navbar">
      <NavLink to="/products" data-testid="products-link" exact>
        <img src={logo} alt="logo" className={styles.logo} />
      </NavLink>
      <ul className={styles.ul}>
        <li className={styles.linkHome}>
          <NavLink
            to="/products"
            data-testid="products-link"
            exact
            className={styles.navLink}
          >
            HOME
          </NavLink>
        </li>
        <li className={styles.linkShop}>
          <NavLink
            to="/shop"
            data-testid="shop-link"
            className={styles.navLink}
          >
            SHOP
          </NavLink>
        </li>
        <li className={styles.linkJournal}>
          <NavLink
            to="/journal"
            data-testid="journal-link"
            className={styles.navLink}
          >
            JOURNAL
          </NavLink>
        </li>
        <li className={styles.linkMore}>
          <NavLink
            to="/more"
            data-testid="more-link"
            className={styles.navLink}
          >
            MORE
          </NavLink>
        </li>
      </ul>
      <button type="button" className={styles.buttonCart} onClick={openCart}>
        MY CART ({countProducts})
      </button>
    </nav>
  );
};

export default Navigation;
