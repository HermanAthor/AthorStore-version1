"use client";
import React, { useEffect } from "react";
import MainLayout from "../../../components/LayoutComponents/MainLayout";
import { Container, Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import { cartState } from "@/context/CartContext/cartContext";
import Cart from "../../../components/PageComponents/Cart";

const CartPage = () => {
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

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <MainLayout>
      <Container className="mt-24">
        <div className=" flex items-center mx-auto">
          <div>
            Your Cart has{" "}
            <span>
              {cartItems.length} {cartItems.length < 2 ? "item" : "items"}
            </span>
          </div>
        </div>
        {cartItems?.map((item) => {
          return <Cart item={item} />;
        })}
        <button className="btn">
          {" "}
          Checkout {"("}
          <span>
            Dkk{getCartTotal()} {")"}
          </span>{" "}
        </button>
      </Container>
    </MainLayout>
  );
};

export default CartPage;
