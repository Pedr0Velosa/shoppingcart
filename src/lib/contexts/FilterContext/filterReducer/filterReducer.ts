import { dispatchType, stateType } from "./filterTypes";

export const ACTIONS = {
  QUERY: 'query',
  CATEGORY: 'category'
}

export const reducer = (state: stateType, { type, payload }: dispatchType) => {
  switch (type) {
    case ACTIONS.QUERY:
      return {
        ...state, query: payload
      }
    case ACTIONS.CATEGORY:
      if (state.category === payload) return {
        ...state, category: null
      }
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