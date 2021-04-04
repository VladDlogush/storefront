/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useEffect, createRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './CartPopup.module.css';
import cancelIcon from '../../img/cancel.png';
import {
  getCartPopupListSelector,
  getTotalSelector,
} from '../../redux/selectors';
import { closePopup } from '../../redux/popup/popupActions';
import { deleteProductOperation } from '../../redux/cart/cartOperations';

const CartPopup = () => {
  const dispatch = useDispatch();
  const cartPopupList = useSelector(state => getCartPopupListSelector(state));
  const total = useSelector(state => getTotalSelector(state));
  const backdropRef = createRef();

  const closeCart = () => dispatch(closePopup('cart'));
  const deleteCartItem = id => dispatch(deleteProductOperation(id));

  useEffect(() => {
    const handleKeyPress = e => {
      if (e.code !== 'Escape') return;

      closeCart();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleBackdropClick = e => {
    const { current } = backdropRef;

    if (current && e.target !== current) return;

    closeCart();
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
            cartPopupList.map(
              ({ id, image, title, quantity, brand, price }) => (
                <li className={styles.item} key={id}>
                  <img
                    className={styles.imgProduct}
                    src={require(`../../img/${image}`)}
                    alt={title}
                  />
                  <div className={styles.description}>
                    <p className={styles.collection}>{title}</p>
                    <p className={styles.count}>x {quantity}</p>
                    <p className={styles.name}>{brand}</p>
                    <p className={styles.price}>${price * quantity}.00</p>
                  </div>
                  <button
                    className={styles.cancelButton}
                    type="button"
                    onClick={() => deleteCartItem(id)}
                  >
                    <img
                      className={styles.cancelImg}
                      src={cancelIcon}
                      alt="cancel icon"
                    />
                  </button>
                </li>
              ),
            )}
        </ul>
        <div className={styles.divTotal}>
          <p className={styles.total}>TOTAL</p>
          <p className={styles.check}>{total}</p>
        </div>
        <div className={styles.divButtons}>
          <Link style={{ textDecoration: 'none' }} to="/cart">
            <button className={styles.view} type="button" onClick={closeCart}>
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
