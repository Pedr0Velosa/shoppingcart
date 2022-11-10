import { stateCartType, dispatchType } from './cartTypes'

export const ACTIONS = {
  ADD_ITEM: 'add-item',
  REMOVE_ITEM: 'remove-item',
  UPDATE_ITEM: 'update-item',
  CLEAR_ITEM: 'clear-item'
}

export const reducer = (state: stateCartType, { type, payload: { id, title, brand, price, thumbnail } }: dispatchType) => {
  switch (type) {
    case ACTIONS.ADD_ITEM:
      if (state.products.find(item => item.id === id)?.qtd == null) {
        return {
          ...state, products: [...state.products, { id, title, brand, price, thumbnail, qtd: 1 }]
        }
      } else {
        return {
          ...state, products: state.products.map(item => {
            if (item.id === id) {
              return { ...item, qtd: item.qtd + 1 }
            } else {
              return item
            }
          })
        }
      }
    case ACTIONS.REMOVE_ITEM:
      if (state.products.find(item => item.id === id)?.qtd === 1) {
        return {
          ...state, products: [...state.products.filter(item => item.id !== id)]
        }
      } else {
        return {
          ...state, products: state.products.map(item => {
            if (item.id === id) {
              return { ...item, qtd: item.qtd - 1 }
            } else {
              return item
            }
          })
        }
      }
    case ACTIONS.CLEAR_ITEM:
      if (state.products.find(item => item.id === id)?.qtd) {
        return {
          ...state, products: [...state.products.filter(item => item.id !== id)]
        }
      }
      return {
        ...state, products: [...state.products]
      }
    default:
      return state;
  }
}

export const initialState: stateCartType = {
  products: [],
}
