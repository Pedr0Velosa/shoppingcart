import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import ProductItem from '../src/components/ProductItem'
import styles from '../styles/Homes.module.css'
import axios from 'axios'

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

type DataType = {
  limit: number,
  products: ProductsType[] | null | undefined,
  skip: string,
  total: number
}

type HomeProps = {
  data: DataType
}

const Home: NextPage<HomeProps> = ({ data }) => {

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      {data &&
        <div className={styles.container}>
          {data?.products?.map((item) =>
            <ProductItem
              key={item.id}
              item={item}
            />
          )}
        </div>
      }
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const data = await axios.get(`${ process.env.NEXT_PUBLIC_BASE_URL }/products?skip=0&limit=30`)
    .then(response => response.data)
  return {
    props: {
      data: data,
    }
  }
}
