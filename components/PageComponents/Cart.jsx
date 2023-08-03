"use client";

import { Grid } from "@mui/material";

const Cart = ({ item }) => {
  const { title, image, quantity, price } = item;

  return (
    <Grid
      container
      className="flex w-full bg-white flex-row justify-between items-center content-center md:bg-white md:h-56 mt-24 rounded-lg px-6 py-2 md:p-0"
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
            <button className="border border-black items-center content-center w-full py-4 px-4 md:py-1 md:px-1">
              -
            </button>
            <div className="border flex justify-center border-black items-center content-center w-full py-4 px-4 md:py-1 md:px-1">
              <p className="items-center">{quantity}</p>
            </div>
            <button className="border border-black items-center content-center w-full py-4 px-4 md:py-1 md:px-1">
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
  );
};
export default Cart;
