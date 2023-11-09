"use client";
import { getProducts } from "@/utils/fetchProducts";
import { Box, Container, Grid, Typography } from "@mui/material";

import React from "react";

import ProductComp from "./ProductComp";

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
          <ProductComp key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
}
