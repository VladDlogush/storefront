export const updateProductInCart = (cartList, id, action) => {
  const product = cartList.find(({ id: itemId }) => itemId === id);

  switch (action) {
    case 'increment':
      return { ...product, quantity: product.quantity + 1 };
    case 'decrement':
      return { ...product, quantity: product.quantity - 1 };

    default:
      return product;
  }
};

export const updateCartList = (cartList, id, action) => {
  const updatedProduct = updateProductInCart(cartList, id, action);

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
      // eslint-disable-next-line no-return-assign
      return {
        ...cart,
        // eslint-disable-next-line no-param-reassign
        countProducts: (cart.countProducts += 1),
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

  return {
    ...cart,
    cartList: cart.cartList.filter(item => item.id !== id),
    countProducts: cart.countProducts - quantity,
    total: cart.total - price * quantity,
  };
};

export const addProduct = (cart, product) => {
  const { cartList } = cart;

  // узнать почему не работает isProductInCart,
  // если очистить полностю cartList и добавлять снова продукти(строка 76)

  // находит продукт в cartList или undefined
  const isProductInCart = cartList.find(item => item.id === product.id);

  console.log('isProductInCart: ', isProductInCart);

  // если продукт есть добавляеть +1 или возращает продукт
  const newItem = isProductInCart
    ? {
        ...isProductInCart,
        quantity: isProductInCart.quantity + 1,
      }
    : product;

  console.log('newItem: ', newItem);

  // если продукт есть добавляет к countProducts +1 и к total цену продукта

  // !! нужно еще добавть newItem,
  // если добавить так:
  // [...cartList, newItem], то будут дублироватся продукти
  // если добавить так:
  // [newItem], то продукт будет перезаписовать весь cartList
  // или посмотреть логику добавление в counter на странице Sopping Cart

  // или
  // если нет продукта добавляет новый продукт в cartList,
  // в countProducts добавляет quantity нового продукта,
  // в total добавляет price нового продукта,

  const newCart = isProductInCart
    ? {
        ...cart,
        cartList: [newItem],
        countProducts: cart.countProducts + 1,
        total: cart.total + newItem.price,
      }
    : {
        ...cart,
        cartList: [...cartList, newItem],
        countProducts: cart.countProducts + newItem.quantity,
        total: cart.total + newItem.price,
      };

  console.log('newCart: ', newCart);

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

  const newCart = isProductInCart
    ? {
        ...cart,
        countProducts: newItem.quantity,
        total: cart.total + newItem.price,
      }
    : {
        ...cart,
        cartList: [...cartList, newItem],
        countProducts: cart.countProducts + newItem.quantity,
        total: cart.total + newItem.price,
      };

  return newCart;
};
