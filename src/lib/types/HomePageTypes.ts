export type ProductsType = {
  brand: string,
  category: string,
  description: string,
  discountPercentage: number,
  id: number,
  images: string[],
  price: number,
  rating: number,
  stock: number,
  thumbnail: string,
  title: string
}

export type DataType = {
  limit: number,
  products: ProductsType[] | null | undefined,
  skip: string,
  total: number
}

type HomeProps = {
  items: DataType
}