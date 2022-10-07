import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import axios from 'axios'


const Home: NextPage = ({ data }) => {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
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
