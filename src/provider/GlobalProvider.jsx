'use client'

import { CartProvider } from '@/context/cart'
import React from 'react'

export default function GlobalProvider({ children }) {
  return (
    <CartProvider>{children}</CartProvider>
  )
}
