"use client";
import React from "react";
import MainLayout from "../../../components/LayoutComponents/MainLayout";
import { Container, Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import { cartState } from "@/context/CartContext/cartContext";
import Cart from "../../../components/PageComponents/Cart";

const CartPage = () => {
  const [cartItem, setCartItem] = useRecoilState(cartState);

  return (
    <MainLayout>
      <Container>
        {cartItem.map((item) => {
          return <Cart item={item} />;
        })}
      </Container>
    </MainLayout>
  );
};

export default CartPage;
