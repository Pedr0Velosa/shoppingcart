import { dispatchType, stateType } from "./filterTypes";
import { Reducer } from 'react'

export const ACTIONS = {
  QUERY: 'query',
  CATEGORY: 'category'
}

export const reducer = (state: stateType, { type, payload }: dispatchType): stateType => {

  switch (type) {
    case ACTIONS.QUERY:
      return {
        ...state, query: payload
      }
    case ACTIONS.CATEGORY:
      return {
        ...state, category: payload
      }
    default:
      return state;
  }
}

export const initialState: stateType = {
  query: null,
  category: null
}