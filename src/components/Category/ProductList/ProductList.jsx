import React, { useEffect } from 'react';
// import { createSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ProductList.module.css';
import { getProductsSelectorOperation } from '../../../redux/category/categoryOperations';
import {
  getProductsSelector,
  getCartPopupListSelector,
} from '../../../redux/selectors';
import {
  setCartPopup,
  // setCountProducts,
  // setTotal,
  setQuantity,
} from '../../../redux/cartPopup/cartPopupActions';

// eslint-disable-next-line react/prop-types
const ProductList = ({ match }) => {
  const dispatch = useDispatch();

  const productList = useSelector(state => getProductsSelector(state));
  const cartPopupList = useSelector(state => getCartPopupListSelector(state));

  useEffect(() => {
    dispatch(getProductsSelectorOperation());
  }, []);

  const addToCart = (product, id) => {
    // const getTotalSelectorPriceCart = createSelector([cart], cartList => {
    //   const prices = cartList.map(({ quantity, price }) =>
    //     quantity > 1 ? price * quantity : price,
    //   );
    //   const reducer = (accumulator, currentValue) => accumulator + currentValue;

    //   return prices.reduce(reducer, 0);
    // });

    // const total = getTotalSelectorPriceCart();
    // dispatch(setTotal(total));

    if (cartPopupList.includes(product)) {
      console.log(cartPopupList.includes(product));
      console.log('+1 count product');
      console.log('cartPopupList: +1 count product', cartPopupList);
      console.log('product: +1 count product ', product);
      dispatch(setQuantity(product, id));
    } else {
      console.log(cartPopupList.includes(product));
      console.log('+1 product in list');
      console.log('cartPopupList: +1 product in list', cartPopupList);
      console.log('product: +1 product in list', product);
      dispatch(setCartPopup(product));
    }

    const a = {
      brand: 'Kiriko',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.',
      id: 6556467,
      image: '/static/media/hand-painted-blue-flat-dish.7ff619d5.jpg',
      price: 28,
      quantity: 2,
      title: 'Hand Painted Blue Flat Dish',
    };

    const b = {
      brand: 'Kiriko',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.',
      id: 6556467,
      image: '/static/media/hand-painted-blue-flat-dish.7ff619d5.jpg',
      price: 28,
      quantity: 2,
      title: 'Hand Painted Blue Flat Dish',
    };

    console.log(a === b);
    // dispatch(setCartPopup(product));
    // dispatch(setCountProducts());
  };

  return (
    <div>
      <ul className={styles.block}>
        {productList &&
          productList.map(product => (
            <li className={styles.positionPhoto} key={product.id}>
              <article className={styles.featuresListItem}>
                <img
                  className={styles.imgProduct}
                  src={product.image}
                  alt="product"
                />
                <div className={styles.blocks}>
                  <div className={styles.iconsWrapperWide}>
                    <Link
                      style={{ textDecoration: 'none' }}
                      to={{
                        pathname: `${match.path}/${product.title}`,
                      }}
                    >
                      <button type="button" className={styles.textIcon}>
                        VIEW DETAILS
                      </button>
                    </Link>
                  </div>
                  <div className={styles.iconsWrapperWide}>
                    <button
                      type="button"
                      className={styles.textIcon}
                      onClick={() => addToCart(product, product.id)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <div className={styles.productPrice}>
                  <p className={styles.name}>{product.brand}</p>
                  <p className={styles.collection}>{product.title}</p>
                  <p className={styles.price}>${product.price}.00</p>
                </div>
              </article>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductList;

// сделать правильний путь src
// сделать add to cart переиспользованной кнопкой
