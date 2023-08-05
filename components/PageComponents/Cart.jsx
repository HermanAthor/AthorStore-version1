"use client";

import { addToCart } from "@/api/utils";
import { cartState } from "@/context/CartContext/cartContext";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const Cart = ({ item }) => {
  const { title, image, quantity, price } = item;

  const [cartItems, setCartItems] = useRecoilState(cartState);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  // Add items to Cart function
  const addToCart = (product) => {
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
  // Remove Items from cart

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)); // if the quantity of the item is 1, remove the item from the cart
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
            : cartItem
        )
      );
    }
  };

  return (
    <>
      <Grid
        container
        className="flex w-full bg-white flex-row justify-between items-center content-center md:bg-white md:h-56 mt-1 rounded-lg px-6 py-2 md:p-0"
      >
        <Grid item xs={12} md={2}>
          <div className=" flex md:justify-center md:items-center content-center rounded-lg">
            <img
              className="h-56 w-full md:w-56 object-contain rounded-lg"
              src={image}
              alt="shoe"
            />
          </div>
        </Grid>
        <Grid item xs={12} md={2}>
          <div className="grid gap-x-1 md:gap-x-10 md:space-x-5 md:space-y-5 space-y-4 font-semibold grid-cols-2 md:grid-cols-1 items-center ">
            <p>
              Price <span className="md:hidden">:</span>
            </p>
            <p className="font-bold">DKK {price}</p>
          </div>
        </Grid>
        <Grid item xs={12} md={2}>
          <div className="grid gap-x-1 md:gap-x-10 md:space-x-5 md:space-y-5 space-y-4 font-semibold grid-cols-2 md:grid-cols-1 items-center content-center align-middle">
            <div>Product</div>
            <div className="">{title}</div>
          </div>
        </Grid>
        <Grid item xs={12} md={2}>
          <div className="grid gap-x-1 md:gap-x-10 md:space-x-5 md:space-y-5 space-y-4 justify-start content-start font-semibold grid-cols-2 md:grid-cols-1 items-center">
            <p>
              Quantity <span className="md:hidden">:</span>
            </p>
            <div className="flex flex-row border border-black justify-between items-center">
              <button
                onClick={() => removeFromCart(item)}
                className="border border-black items-center content-center w-full py-4 px-4 md:py-1 md:px-1"
              >
                -
              </button>
              <div className="border flex justify-center border-black items-center content-center w-full py-4 px-4 md:py-1 md:px-1">
                <p className="items-center">{quantity}</p>
              </div>
              <button
                onClick={() => addToCart(item)}
                className="border border-black items-center content-center w-full py-4 px-4 md:py-1 md:px-1"
              >
                +
              </button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={2}>
          <div className="grid gap-x-1 md:gap-x-10 md:space-x-5 md:space-y-5 space-y-4 font-semibold grid-cols-2 md:grid-cols-1 items-center">
            <p>
              Total <span className="md:hidden">:</span>
            </p>
            <p>{price * quantity}</p>
          </div>
        </Grid>
        {/* <Grid item xs={12} md={2}>
            <button>clear Cart</button>
          </Grid> */}
      </Grid>
    </>
  );
};
export default Cart;
