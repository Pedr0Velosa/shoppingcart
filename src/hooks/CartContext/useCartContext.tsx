import React from 'react'
import { useContext } from 'react';
import { cartContext } from './CartProvider';

const useCartContext = () => {
  const { cart, setCart } = useContext(cartContext)
  return { cart, setCart }
}

export default useCartContext

