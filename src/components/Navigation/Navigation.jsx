import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './Navigation.module.css';
import logo from '../../img/logo.png';
import { setOpenModal } from '../../redux/cartPopup/cartPopupActions';
// import { getCountProductsSelector } from '../../redux/selectors';

const Navigation = () => {
  const dispatch = useDispatch();
  // const countProducts = useSelector(state => getCountProductsSelector(state));

  const openModal = () => {
    dispatch(setOpenModal());
  };

  return (
    <nav className={styles.nav}>
      <NavLink to="/products" exact>
        <img src={logo} alt="logo" className={styles.logo} />
      </NavLink>
      <ul className={styles.ul}>
        <li className={styles.linkHome}>
          <NavLink to="/products" exact className={styles.navLink}>
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
      <button type="button" className={styles.buttonCart} onClick={openModal}>
        MY CART ()
        {/* MY CART ({countProducts}) */}
      </button>
    </nav>
  );
};

export default Navigation;
