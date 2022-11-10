type stateProductType = {
  id: number,
  title: string,
  brand: string,
  price: number,
  thumbnail: string,
}

export type stateCartType = {
  products: stateProductType[] | [],
  total: number
}

export type dispatchType = {
  type: string,
  payload: stateProductType
}