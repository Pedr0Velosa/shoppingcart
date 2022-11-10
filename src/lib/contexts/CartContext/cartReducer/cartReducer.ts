import { stateCartType, dispatchType } from './cartTypes'

export const ACTIONS = {
  ADD_ITEM: 'add-item',
  REMOVE_ITEM: 'remove-item',
  UPDATE_ITEM: 'update-item'
}

export const reducer = (state: stateCartType, { type, payload: { id, title, brand, price, thumbnail } }: dispatchType) => {
  console.log(state)
  switch (type) {
    case ACTIONS.ADD_ITEM:
      return {
        ...state, products: [...state.products, { id, title, brand, price, thumbnail }]
      }
    case ACTIONS.REMOVE_ITEM:
      return {
        ...state
      }
    case ACTIONS.UPDATE_ITEM:
      return {
        ...state
      }
    default:
      return state;
  }
}

export const initialState: stateCartType = {
  products: [],
  total: 0
}
