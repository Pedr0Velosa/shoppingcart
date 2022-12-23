import React,{useEffect,useState} from 'react'
import { NextPage } from 'next/types'
import SingleProduct from '@components/SingleProduct'
import { GetServerSideProps } from 'next/types'
import type { ProductsType } from '@lib/types/HomePageTypes'
import axios from 'axios'
import Head from 'next/head'
import LoadingNewProducts from '@components/Loading/HomePage/LoadingNewProducts'
import useLoadingPage from '@lib/hooks/useLoadingPage'

type ProductProps = {
  data: ProductsType
}

const Product: NextPage<ProductProps> = ({ data }): JSX.Element => {
  const isLoading = useLoadingPage()

  if(isLoading){
    return <LoadingNewProducts/>
  }

  return (
    <>
      <Head>
        <title>{data.title || 'Erro ao encontrar produto'}</title>
      </Head>
      <SingleProduct product={data} />
    </>

  )
}

export default Product

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id

  const data = await axios.get(`${ process.env.NEXT_PUBLIC_BASE_URL }/products/${ id }`)
    .then(response => response.data).catch((err)=>{console.error(err)})

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data
    }
  }
}