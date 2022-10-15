type stateProductType = {
  id: number | null,
  title: string | null,
  price: number | null,
  thumbnail: string | null,
  url: string | null,
  qtd: number | null,
  subtotal: number | null
}

export type stateCartType = {
  products: stateProductType | null,
  total: number
}

export type dispatchType = {
  type: string,
  payload: string
}