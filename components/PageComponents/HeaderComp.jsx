"use client";

import { cartState } from "@/context/CartContext/cartContext";
import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";

// const styles = {
//   header:{
//     display:'flex',
//     justifyContent:'between',
//     backgroundColor:'transparent',
//     color:'black'

//   },
//   logo:{
//     backgroundColor:'green',
//     padding:'30px'
//   },
//   nav:{},
//   nav_el:{}
// }

const HeaderComp = () => {
  const cartItems = useRecoilValue(cartState);
  return (
    <div className="navbar dark:bg-gray-500">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Us</a>
              <ul className="p-2">
                <li>
                  <a>about</a>
                </li>
                <li>
                  <a>contact</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Cart</a>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          AthorStore
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>About Us</summary>
              <ul className="p-2">
                <li>
                  <a>Our Story</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/cart">
              Cart <span>{cartItems.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComp;
