type stateProductType = {
  id: number,
  title: string,
  brand: string,
  price: number,
  thumbnail: string,
}

export interface stateProductTypeFinal extends stateProductType {
  qtd: number
}

export type stateCartType = {
  products: stateProductTypeFinal[] | [],
}

export type dispatchType = {
  type: string,
  payload: stateProductType
}