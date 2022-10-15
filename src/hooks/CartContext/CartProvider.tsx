import React, { createContext, Dispatch, useReducer, useState } from 'react'
import { reducer, initialState } from './cartReducer/cartReducer'
import { dispatchType } from './cartReducer/cartTypes'
import { stateCartType } from './cartReducer/cartTypes'

type cartContextType = {
  state: stateCartType
  dispatch: Dispatch<dispatchType>
}

export const cartContext = createContext({} as cartContextType)

type CartProviderType = {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderType): JSX.Element => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider