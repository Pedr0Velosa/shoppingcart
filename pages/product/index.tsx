import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import ProductCard from '@components/ProductCard'
import styles from '@styles/Homes.module.css'
import axios from 'axios'
import { dehydrate, QueryClient, useQuery, useInfiniteQuery } from 'react-query'
import type { DataType, ProductsType } from '@lib/types/HomePageTypes'
import { useState, useEffect } from 'react'
import HomePageLoading from '@components/Loading/HomePageLoading'
import { useInView } from 'react-intersection-observer'
import React from 'react'

const getProductsData = async (skip: number) => {
  return await (await axios.get(`${ process.env.NEXT_PUBLIC_BASE_URL }/products?skip=${ skip }&limit=30`)
    .then(response => response.data))
}

const Home: NextPage = () => {

  const { ref, inView } = useInView()
  const [skip, setSkip] = useState(0)
  const {
    fetchNextPage,
    hasNextPage,
    data
  } = useInfiniteQuery<DataType>(
    ['products'],
    async ({ pageParam = 0 }) => getProductsData(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.skip + 30
    }
  )

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  // if (isLoading) return <HomePageLoading />

  // if (error) return <>Error</>

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        {
          data?.pages?.map(page => (
            page.products?.map((item: ProductsType, index: number) =>
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
        {hasNextPage ? <>não</> : <>sim</>}
      </div>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery<DataType>(['products', 0], () => getProductsData(0))

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}