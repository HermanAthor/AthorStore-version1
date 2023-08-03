import React from "react";
import { atom } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: [],
});
