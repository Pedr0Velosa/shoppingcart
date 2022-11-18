import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import styles from '@styles/Homes.module.css'

import ProductCard from '@components/ProductCard/ProductCard'
import HomePageLoading from '@components/Loading/HomePage/HomePageLoading'
import LoadingNewProducts from '@components/Loading/HomePage/LoadingNewProducts'

import { useInView } from 'react-intersection-observer'
import { dehydrate, QueryClient, useInfiniteQuery } from 'react-query'
import axios from 'axios'

import type { NextPage, GetStaticProps } from 'next'
import type { DataType, ProductsType, GetProductsDataType } from '@lib/types/HomePageTypes'
import { useFilterContext } from '@lib/utils/Imports'


const getProductsData = async ({ pageParam = 0, signal }: GetProductsDataType) => {
  return await (await axios.get(`${ process.env.NEXT_PUBLIC_BASE_URL }/products?skip=${ pageParam ?? 0 }&limit=30`, { signal })
    .then(response => response.data))
}
const getCategorysData = async ({ signal }: { signal: AbortSignal | undefined }) => {
  return await (await axios.get(`${ process.env.NEXT_PUBLIC_BASE_URL }${ process.env.NEXT_PUBLIC_CATEGORYS_URL }`, { signal })
    .then(response => response.data))
}

const Home: NextPage = () => {

  const { state } = useFilterContext()
  const { ref, inView } = useInView({ triggerOnce: true });
  const {
    fetchNextPage,
    isFetchingNextPage,
    error,
    hasNextPage,
    data
  } = useInfiniteQuery<DataType>(
    ['products', state.category],
    async ({ pageParam = 0, signal }) => getProductsData({ pageParam, signal }),
    {
      getNextPageParam: (lastPage) => {
        if ((+lastPage.skip + lastPage.limit) >= lastPage.total) return undefined
        return lastPage.skip + 30
      }
    }
  )

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  if (!data) return (
    <div className={styles.container}>
      <HomePageLoading />
    </div>
  )

  if (error) return <>Error</>

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        {
          data.pages.map(page => (
            page?.products?.filter(item => item.title.toLowerCase().includes(state.query?.toLowerCase() || '')).map((item: ProductsType, index: number) =>
              <React.Fragment key={item.id}>
                <ProductCard
                  item={item}
                  isLastItem={index + 1 === page.products?.length}
                  reference={ref}
                />
              </React.Fragment>
            )
          ))
        }
      </div>
      {isFetchingNextPage ?
        <LoadingNewProducts /> :
        hasNextPage && !state.query ?
          <LoadingNewProducts /> :
          <div style={{ textAlign: 'center', marginBlock: '2rem' }}>
            There aren&apos;t more products
          </div>
      }
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchInfiniteQuery<DataType>(
    ['products'],
    ({ pageParam = 0, signal }) => getProductsData({ pageParam, signal })
  )
  await queryClient.prefetchQuery(
    ['categorys'],
    ({ signal }) => getCategorysData({ signal })
  )

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
    }
  }
}