"use client";

import { cartState } from "@/context/CartContext/cartContext";
import { addToCart } from "@/utils/addToCart";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRecoilState } from "recoil";

function ProductComp({ product }) {
  let photo = "";
  if (product.image) {
    photo = product.image;
  } else {
    photo = product.thumbnail;
  }
  const [cartItems, setCartItems] = useRecoilState(cartState);
  return (
    <Grid item xs={12} sm={6} md={4} key={product.id}>
      <Box className="flex flex-col h-full">
        <Card
          variant="outlined"
          className="mb-4 mt-4 flex flex-col h-full rounded p-4 dark:bg-[#3e3e42]"
        >
          <CardMedia
            component="img"
            image={photo}
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
              <Button
                onClick={() => addToCart(product, cartItems, setCartItems)}
                variant="outlined"
                color="secondary"
              >
                Add to Cart
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
}
export default ProductComp;
