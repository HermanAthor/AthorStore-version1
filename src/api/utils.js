
/* Products data call*/ 
export async function getProducts (){
    const res = await fetch('https://fakestoreapi.com/products')
    const products = res.json()
    return await products
}


export async function getProductsDetails (productId){
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`)

    if(!res.ok) {
        throw new Error('failed to fetch user')
    }

    return res.json()
    
}

export const addToCart = (product) => {
    const isItemInCart = cartItems.find(
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