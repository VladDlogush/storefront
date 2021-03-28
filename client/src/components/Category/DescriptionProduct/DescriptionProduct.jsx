import React from 'react';
import styles from './DescriptionProduct.module.css';
import plates from '../../../img/plates-header.jpg';

const DescriptionProduct = () => {
  return (
    <div className={styles.div}>
      <img src={plates} alt="plates" className={styles.platesHeader} />
      <div className={styles.description}>
        <h1 className={styles.title}>Plates</h1>
        <p className={styles.textDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          odit consequuntur repellendus tempore officiis distinctio, minima
          alias eum harum. Soluta, rerum fuga porro aut eligendi quaerat sequi
          hic consequuntur sint.
        </p>
      </div>
    </div>
  );
};

export default DescriptionProduct;

// сделать плашку адаптивной
