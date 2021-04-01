import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartPopupListSelector } from '../../../redux/selectors';
import { deleteItemList } from '../../../redux/cartPopup/cartPopupActions';
import styles from './CheckList.module.css';
import cancelIcon from '../../../img/cancel.png';

const CheckList = () => {
  const dispatch = useDispatch();
  const cartPopupList = useSelector(state => getCartPopupListSelector(state));

  const deleteCartItem = id => {
    dispatch(deleteItemList(id));
    // dispatch(setCountProducts(cartPopupList.length));
  };

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
          cartPopupList.map(product => (
            <li className={styles.checkProduct} key={product.id}>
              <div className={styles.display}>
                <img
                  className={styles.imgProduct}
                  src={product.image}
                  alt="product"
                />
                <div className={styles.descriptionProduct}>
                  <p className={styles.name}>{product.brand}</p>
                  <p className={styles.collection}>{product.title}</p>
                  <p className={styles.color}>Color: White</p>
                </div>
                <div className={styles.addProduct}>
                  <div className={styles.counter}>
                    <p className={styles.inputCounter}>{product.quantity}</p>
                    <div className={styles.counterButtons}>
                      <button className={styles.buttonIncrement} type="button">
                        +
                      </button>
                      <button className={styles.buttonDecrement} type="button">
                        -
                      </button>
                    </div>
                  </div>
                </div>
                <p className={styles.totalNumber}>${product.price}.00</p>
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
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default CheckList;
