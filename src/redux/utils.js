export const updateProductInCart = (cartList, id, action, item) => {
  const product = cartList.find(({ id: itemId }) => itemId === id);

  switch (action) {
    case 'increment':
      return { ...product, quantity: product.quantity + 1 };
    case 'decrement':
      return { ...product, quantity: product.quantity - 1 };
    case 'details-increment':
      return { ...product, quantity: item.quantity };

    default:
      return product;
  }
};

export const updateCartList = (cartList, id, action = 'increment', item) => {
  const updatedProduct = updateProductInCart(cartList, id, action, item);

  return cartList.reduce((acc, current) => {
    // eslint-disable-next-line no-unused-expressions
    current.id === updatedProduct.id
      ? acc.push(updatedProduct)
      : acc.push(current);
    return acc;
  }, []);
};

export const updateCart = (cart, id, action) => {
  const { cartList } = cart;

  const updatedCartList = updateCartList(cartList, id, action);
  const productInCart = updateProductInCart(cartList, id, action);

  switch (action) {
    case 'increment':
      return {
        ...cart,
        countProducts: cart.countProducts + 1,
        total: cart.total + productInCart.price,
        cartList: updatedCartList,
      };
    case 'decrement':
      return {
        ...cart,
        countProducts: cart.countProducts - 1,
        total: cart.total - productInCart.price,
        cartList: updatedCartList,
      };

    default:
      return cart;
  }
};

export const deleteFromCart = (cart, id) => {
  const { cartList } = cart;

  const { price, quantity } = cartList.find(({ id: itemId }) => itemId === id);

  const newCart = {
    ...cart,
    cartList: cart.cartList.filter(item => item.id !== id),
    countProducts: cart.countProducts - quantity,
    total: cart.total - price * quantity,
  };

  return newCart;
};

export const addProduct = (cart, product) => {
  const { cartList } = cart;

  const isProductInCart = cartList.find(item => item.id === product.id);

  const newItem = isProductInCart
    ? {
        ...isProductInCart,
        quantity: isProductInCart.quantity + 1,
      }
    : product;

  const newCart = isProductInCart
    ? {
        ...cart,
        cartList: updateCartList(cart.cartList, newItem.id),
        countProducts: cart.countProducts + 1,
        total: cart.total + newItem.price,
      }
    : {
        ...cart,
        cartList: [...cart.cartList, newItem],
        countProducts: cart.countProducts + newItem.quantity,
        total: cart.total + newItem.price,
      };

  return newCart;
};

export const addDetailstProduct = (cart, product) => {
  const { cartList } = cart;

  const isProductInCart = cartList.find(
    ({ id: itemId }) => itemId === product.id,
  );

  const newItem = isProductInCart
    ? {
        ...isProductInCart,
        quantity: isProductInCart.quantity + product.quantity,
        price: isProductInCart.price * product.quantity,
      }
    : product;

  const newList = updateCartList(
    cart.cartList,
    newItem.id,
    'details-increment',
    newItem,
  );

  const newCart = isProductInCart
    ? {
        ...cart,
        cartList: newList,
        countProducts:
          cart.countProducts + newItem.quantity - isProductInCart.quantity,
        total: cart.total + product.price * product.quantity,
      }
    : {
        ...cart,
        cartList: [...cartList, newItem],
        countProducts: cart.countProducts + newItem.quantity,
        total: cart.total + newItem.price * product.quantity,
      };

  return newCart;
};

export const checkingForAnEmptyArray = data => {
  // eslint-disable-next-line no-prototype-builtins
  const isLastProductInCart = data.hasOwnProperty('cartList');

  return isLastProductInCart ? data : { ...data, cartList: [] };
};
