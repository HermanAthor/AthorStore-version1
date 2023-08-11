"use client";
import { getHomeProducts } from "@/api/utils";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MainLayout from "../LayoutComponents/MainLayout";
import { Select } from "../customCoponents/Select";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

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
                className="w-full dark:bg-[#3e3e42] dark:text-gray-400"
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
                <SingleProduct key={product.id} product={product} />
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

function SingleProduct({ product }) {
  const { description, title, thumbnail, price, category, id } = product;
  return (
    <Grid item xs={12} sm={6} md={4} key={id}>
      <Box className="flex flex-col h-full">
        <Card
          variant="outlined"
          className="mb-4 mt-4 flex flex-col h-full rounded p-4 dark:bg-[#3e3e42]"
        >
          <CardMedia
            component="img"
            image={thumbnail}
            alt={title}
            height="175"
            className=" object-contain h-64 w-full"
          />
          <CardContent className="flex-grow">
            <Typography className="m-0 " variant="h6">
              {title}
            </Typography>
            <Typography className="m-0 " variant="body1">
              {category}
            </Typography>
            <Typography variant="body2" className="font-bold">
              DKK {price}
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

/*

<div className="container flex mx-auto p-3">
  <div className="card w-96  glass">
    <figure className="">
      <Image src={thumbnail} alt={title} height={175} width={175} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
      <p>DKK {price}</p>
      <p>{category}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</div>

*/
