/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartPopupListSelector } from '../../../redux/selectors';
import styles from './CheckList.module.css';
import cancelIcon from '../../../img/cancel.png';
import {
  updateProductInCartOperation,
  deleteProductOperation,
} from '../../../redux/cart/cartOperations';

const CheckList = () => {
  const dispatch = useDispatch();
  const cartPopupList = useSelector(state => getCartPopupListSelector(state));

  const deleteCartItem = id => dispatch(deleteProductOperation(id));
  const updateCartItem = (id, action) =>
    dispatch(updateProductInCartOperation(id, action));

  return (
    <>
      <div className={styles.namePosition}>
        <p className={styles.product}>PRODUCT</p>
        <p className={styles.quantity}>QUANTITY</p>
        <p className={styles.total}>TOTAL</p>
        <p className={styles.action}>ACTION</p>
      </div>
      <ul className={styles.blocks}>
        {cartPopupList &&
          cartPopupList.map(({ id, image, title, brand, quantity, price }) => (
            <li className={styles.checkProduct} key={id}>
              <div className={styles.display}>
                <img
                  className={styles.imgProduct}
                  src={require(`../../../img/${image}`)}
                  alt={title}
                />
                <div className={styles.descriptionProduct}>
                  <p className={styles.name}>{brand}</p>
                  <p className={styles.collection}>{title}</p>
                  <p className={styles.color}>Color: White</p>
                </div>
                <div className={styles.addProduct}>
                  <div className={styles.counter}>
                    <p className={styles.inputCounter}>{quantity}</p>
                    <div className={styles.counterButtons}>
                      <button
                        onClick={() => updateCartItem(id, 'increment')}
                        className={styles.buttonIncrement}
                        type="button"
                      >
                        +
                      </button>
                      <button
                        disabled={quantity === 1}
                        onClick={() => updateCartItem(id, 'decrement')}
                        className={styles.buttonDecrement}
                        type="button"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
                <p className={styles.totalNumber}>${price * quantity}.00</p>
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
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default CheckList;
