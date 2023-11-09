export const addToCart = async (product, cartItems, setCartItems) => {
  //const [cartItems, setCartItems] = useRecoilState(cartState);
  const isItemInCart = await cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (isItemInCart) {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  } else {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  }
};
