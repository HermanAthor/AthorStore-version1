
"use client"
import { createContext, useState,} from "react";

const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [cartItems, setCartItems] = useState([])
    console.log('cartItems: ', cartItems)

    const addToCart = (item)=>{
        console.log('cartItems', cartItems)
        console.log('item', item )
        const isItemInCart = cartItems?.find((cartItem)=> cartItem.id === item.id)
        
        if(isItemInCart){
            setCartItems(
                cartItems.map((cartItem)=>
                cartItem.id === item.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem)
            )
        }else{
            setCartItems([...cartItems, {...item, quantity:1}])
        }
        
    }
    const removeFromCart = (item)=>{
        const isItemInCart = cartItems.find((cartItem)=> cartItem.id === item.id)

        if(isItemInCart.quantity ===1){
            setCartItems(cartItems.filter((cartItem)=> cartItem.id !== item.id))
        }else{
            setCartItems(
                cartItems.map((cartItem)=>
                    cartItem.id === item.id
                ? {...cartItem, quantity: cartItem.quantity - 1}
                : cartItem)
            )
        }
    }
    const clearCart = ()=>{ 
        setCartItems([])

    }
    const getCartTotal = ()=>{
        return cartItems.reduce((total,item)=> total + item.price * item.quantity, 0)
    }

    return (
        <CartContext.Provider
            value={{ 
                addToCart,
                removeFromCart,
                clearCart,
                getCartTotal,
                cartItems
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext