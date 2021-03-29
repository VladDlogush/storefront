import React from 'react';
import styles from './CheckList.module.css';
import plate from '../../../img/hand-painted-blue-flat-dish.jpg';
import cancelIcon from '../../../img/cancel.png';

const CheckList = () => {
  return (
    <>
      <div className={styles.namePosition}>
        <p className={styles.product}>PRODUCT</p>
        <p className={styles.quantity}>QUANTITY</p>
        <p className={styles.total}>TOTAL</p>
        <p className={styles.action}>ACTION</p>
      </div>
      <ul className={styles.blocks}>
        <li className={styles.checkProduct}>
          <div className={styles.display}>
            <img className={styles.imgProduct} src={plate} alt="product" />
            <div className={styles.descriptionProduct}>
              <p className={styles.name}>KIRIKO</p>
              <p className={styles.collection}>HAND PAINTED BLUE FLAT DISH</p>
              <p className={styles.color}>Color: White</p>
            </div>
            <div className={styles.addProduct}>
              <div className={styles.counter}>
                <p className={styles.inputCounter}>1</p>
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
            <p className={styles.totalNumber}>$28.00</p>
            <button className={styles.cancelButton} type="button">
              <img
                className={styles.cancelImg}
                src={cancelIcon}
                alt="cancel icon"
              />
            </button>
          </div>
        </li>
        <li className={styles.checkProduct}>
          <div className={styles.display}>
            <img className={styles.imgProduct} src={plate} alt="product" />
            <div className={styles.descriptionProduct}>
              <p className={styles.name}>KIRIKO</p>
              <p className={styles.collection}>HAND PAINTED BLUE FLAT DISH</p>
              <p className={styles.color}>Color: White</p>
            </div>
            <div className={styles.addProduct}>
              <div className={styles.counter}>
                <p className={styles.inputCounter}>1</p>
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
            <p className={styles.totalNumber}>$28.00</p>
            <button className={styles.cancelButton} type="button">
              <img
                className={styles.cancelImg}
                src={cancelIcon}
                alt="cancel icon"
              />
            </button>
          </div>
        </li>
      </ul>
    </>
  );
};

export default CheckList;
