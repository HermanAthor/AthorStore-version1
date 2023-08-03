"use client";

import { cartState } from "@/context/CartContext/cartContext";
import { useRecoilState } from "recoil";
import MainLayout from "../LayoutComponents/MainLayout";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

const ProductDetails = ({ product }) => {
  const [cartItem, setCartItem] = useRecoilState(cartState);

  const addItemsToCart = () => {
    if (cartItem.findIndex((pro) => pro.id === product.id) === -1) {
      setCartItem((prevState) => [...prevState, product]);
    } else {
      setCartItem((prevState) => {
        return prevState.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      });
    }
  };

  return (
    <MainLayout>
      <Container className=" pt-16">
        <Grid container spacing={1} className="p-4">
          <Grid item xs={12} md={6}>
            {/* <Detailcorousel/> */}
            <Box className="w-full h-full mb-3">
              <img
                className=" object-contain h-full w-full"
                src={product.image}
                alt={product.title}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className="">
            <Box>
              <Typography className="text-xl font-sans mb-4" variant="body2">
                {product.category}
              </Typography>
              <Typography className=" text-3xl font-serif mb-4" variant="h6">
                {product.title}
              </Typography>
              <Typography className=" text-2xl font-sans" variant="body1">
                <span className="font-bold">DKK {product.price}</span>
                <span className="text-[16px]">+ Free shipping</span>
              </Typography>
              <Box className="flex flex-col">
                <p className="text-[16px] mb-4">{product.description}</p>
                <p className="text-[16px] mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique, enim quidem laudantium iure non voluptatibus
                  voluptates tenetur modi qui quia blanditiis aliquid nobis sit
                  quae quos, sunt totam, vero beatae.
                </p>
              </Box>
              <Box className="flex flex-row ">
                <Box className="p-2 m-2">1</Box>
                <Box>
                  <Button
                    onClick={() => addItemsToCart()}
                    variant="outlined"
                    color="secondary"
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
};
export default ProductDetails;
