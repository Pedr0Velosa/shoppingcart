import React, { createContext, Dispatch, useReducer } from 'react'
import { reducer, initialState } from './cartReducer/cartReducer'
import type { dispatchType, stateCartType, stateProductTypeFinal } from './cartReducer/cartTypes'

type cartContextType = {
  state: stateCartType
  dispatch: Dispatch<dispatchType>
  getTotalAmountCartItems: () => number
}

export const cartContext = createContext({} as cartContextType)

const CartProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const getTotalAmountCartItems = () => {
    return state.products.reduce((previusValue: number, currentValue: stateProductTypeFinal) => previusValue + currentValue.qtd, 0)
  }

  return (
    <cartContext.Provider value={{ state, dispatch, getTotalAmountCartItems }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider