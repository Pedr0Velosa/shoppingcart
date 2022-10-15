import React, { createContext, Dispatch, useReducer } from 'react'
import { reducer, initialState } from './filterReducer/filterReducer'
import type { stateType, dispatchType } from './filterReducer/filterTypes'

type FilterProviderType = {
  children: React.ReactNode
}

type filterContextType = {
  state: stateType
  dispatch: Dispatch<dispatchType>
}

export const filterContext = createContext({} as filterContextType)

const FilterProvider = ({ children }: FilterProviderType): JSX.Element => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <filterContext.Provider value={{ state, dispatch }}>
      {children}
    </filterContext.Provider>
  )
}

export default FilterProvider

