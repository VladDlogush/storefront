import React, { useEffect, createRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './CartPopup.module.css';
import cancelIcon from '../../img/cancel.png';
import {
  getCartPopupListSelector,
  getTotalSelector,
  // getCountOrderProductSelector,
} from '../../redux/selectors';

import {
  deleteItemList,
  setOpenModal,
  // setCountProducts,
} from '../../redux/cartPopup/cartPopupActions';

const CartPopup = () => {
  const dispatch = useDispatch();

  const cartPopupList = useSelector(state => getCartPopupListSelector(state));
  const total = useSelector(state => getTotalSelector(state));
  // const countOrderProduct = useSelector(state => getCountOrderProductSelector(state));

  const deleteCartItem = id => {
    dispatch(deleteItemList(id));
    // dispatch(setCountProducts(cartPopupList.length));
  };

  const handleKeyPress = e => {
    if (e.code !== 'Escape') return;

    dispatch(setOpenModal(false));
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const backdropRef = createRef();

  const handleBackdropClick = e => {
    const { current } = backdropRef;

    if (current && e.target !== current) return;

    dispatch(setOpenModal(false));
  };

  return (
    <div
      className={styles.bcg}
      ref={backdropRef}
      onClick={handleBackdropClick}
      onKeyDown={handleBackdropClick}
      aria-hidden="true"
    >
      <div className={styles.div}>
        <ul className={styles.productList}>
          {cartPopupList &&
            cartPopupList.map(product => (
              <li className={styles.item} key={product.id}>
                <img
                  className={styles.imgProduct}
                  src={product.image}
                  alt="product"
                />
                <div className={styles.description}>
                  <p className={styles.collection}>{product.title}</p>
                  <p className={styles.count}>x {product.quantity}</p>
                  <p className={styles.name}>{product.brand}</p>
                  <p className={styles.price}>${product.price}.00</p>
                </div>
                <button
                  className={styles.cancelButton}
                  type="button"
                  onClick={() => deleteCartItem(product.id)}
                >
                  <img
                    className={styles.cancelImg}
                    src={cancelIcon}
                    alt="cancel icon"
                  />
                </button>
              </li>
            ))}
        </ul>
        <div className={styles.divTotal}>
          <p className={styles.total}>TOTAL</p>
          <p className={styles.check}>{total}</p>
        </div>
        <div className={styles.divButtons}>
          <Link style={{ textDecoration: 'none' }} to="/cart">
            <button className={styles.view} type="button">
              VIEW CART
            </button>
          </Link>
          <button className={styles.checkout} type="button">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
