import React, { createContext, Dispatch, useReducer } from 'react'
import { reducer, initialState } from './cartReducer/cartReducer'
import type { dispatchType, stateCartType } from './cartReducer/cartTypes'

type cartContextType = {
  state: stateCartType
  dispatch: Dispatch<dispatchType>
}

export const cartContext = createContext({} as cartContextType)

const CartProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {

  const [state, dispatch] = useReducer<any>(reducer, initialState) as any

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider