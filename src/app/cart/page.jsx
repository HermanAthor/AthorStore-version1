"use client";
import React from "react";
import MainLayout from "../../../components/LayoutComponents/MainLayout";
import { Container, Grid } from "@mui/material";
import { useRecoilValue } from "recoil";
import { cartState } from "@/context/CartContext/cartContext";
import Cart from "../../../components/PageComponents/Cart";

const CartPage = () => {
  const cartItems = useRecoilValue(cartState);

  return (
    <MainLayout>
      <Container className="mt-24">
        <div>Your Cart</div>
        {cartItems?.map((item) => {
          return <Cart item={item} />;
        })}
        <div>Checkout</div>
      </Container>
    </MainLayout>
  );
};

export default CartPage;
