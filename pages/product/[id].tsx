import React from 'react'
import { NextPage } from 'next/types'
import SingleProduct from '@components/SingleProduct'
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
      <div>
        <SingleProduct product={data} discount={Math.random() > 2} />
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