import React from 'react'
import { NextPage } from 'next/types'
import styles from '../styles/Product.module.css'
import SingleProduct from '../src/components/SingleProduct'
import { GetServerSideProps } from 'next/types'
import type { ProductsType } from '.'
import axios from 'axios'
import Head from 'next/head'

type ProductProps = {
  data: ProductsType
}

const Product: NextPage<ProductProps> = ({ data }): JSX.Element => {
  return (
    <>
      <Head>
        <title>{data.title || 'Erro ao encontrar produto'}</title>
      </Head>
      <div className={styles.container}>
        <SingleProduct product={data} discount={Math.random() > 0.1} />
      </div>
    </>

  )
}

export default Product

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id

  const data = await axios.get(`${ process.env.NEXT_PUBLIC_BASE_URL }/products/${ id }`)
    .then(response => response.data)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data
    }, // will be passed to the page component as props
  }
}