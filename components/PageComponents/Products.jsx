"use client";
import { getProducts } from "@/api/utils";
import { cartState } from "@/context/CartContext/cartContext";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";

export default async function Products() {
  const allProducts = await getProducts();

  return (
    <Container>
      <Box>
        <Typography variant="h2" className=" font-sans">
          Sample products
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
}

function Product({ product }) {
  return (
    <Grid item xs={12} sm={6} md={4} key={product.id}>
      <Box className="flex flex-col h-full">
        <Card
          variant="outlined"
          className="mb-4 mt-4 flex flex-col h-full rounded p-4 dark:bg-[#3e3e42]"
        >
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            height="175"
            className=" object-contain h-64 w-full"
          />
          <CardContent className="flex-grow">
            <Typography className="m-0 " variant="h6">
              {product.title}
            </Typography>
            <Typography className="m-0 " variant="body1">
              {product.category}
            </Typography>
            <Typography variant="body2" className="font-bold">
              DKK {product.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              href={`/home/${product.id}`}
              className="bg-gray-400 hover:bg-gray-500 rounded-full p-2"
            >
              View Product
            </Link>
            <Box>
              <Button variant="outlined" color="secondary">
                Add to Cart
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
}
