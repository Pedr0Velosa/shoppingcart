import React, { createContext, useState } from 'react'

type ProductType = {
  id: number,
  title: string,
  price: number,
  thumbnail: string,
  url: string,
  qtd: number,
  subtotal: number
}

type cartType = {
  products: ProductType[],
  total: number
}

type cartContextType = {
  cart: cartType | null,
  setCart: React.Dispatch<React.SetStateAction<cartType | null>>
}

export const cartContext = createContext({} as cartContextType)

type CartProviderType = {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderType): JSX.Element => {

  const [cart, setCart] = useState<cartType | null>({ products: [], total: 0 })

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider