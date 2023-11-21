"use client";
import { getHomeProducts } from "@/utils/fetchProducts";
import {
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MainLayout from "../LayoutComponents/MainLayout";
import { Select } from "../customCoponents/Select";
import SearchIcon from "@mui/icons-material/Search";
import ProductComp from "./ProductComp";

export default function HomeProducts() {
  const [allproducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      const products = await getHomeProducts();
      setAllProducts(products.products);
    }
    fetchProducts();
  }, []);

  const handleSelect = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  return (
    <MainLayout>
      <Container>
        <Grid container>
          <Grid item xs={8}>
            <div className="rounded-full">
              <TextField
                onChange={(e) => setSearch(e.target.value)}
                variant="outlined"
                defaultValue={search}
                label={search}
                placeholder="Search"
                className="w-full dark:bg-[#121213] dark:text-gray-400"
                sx={{ borderRadius: "50px" }}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={(event) => setSearch(event.target.value)}
                      position="end"
                    >
                      <SearchIcon size="large" />
                    </IconButton>
                  ),
                }}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Select handleSelect={handleSelect} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">
              All Products/{" "}
              <span className=" text-sm text-gray-500 px-2">{search}</span>
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {allproducts.length > 0 ? (
            allproducts
              .filter((filteredProduct) => {
                if (search === "") {
                  return filteredProduct;
                } else if (
                  filteredProduct.category.toLowerCase() === search ||
                  filteredProduct.title
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return filteredProduct;
                }
              })
              .map((product) => (
                <ProductComp key={product.id} product={product} />
              ))
          ) : (
            <div className=" items-center mx-auto my-auto">
              <p className="loading loading-dots loading-lg">Loading...</p>
            </div>
          )}
        </Grid>
      </Container>
    </MainLayout>
  );
}
