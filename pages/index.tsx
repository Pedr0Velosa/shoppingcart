import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import axios from 'axios'


const Home: NextPage = ({ data }) => {
  console.log(data);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

    </div>
  )
}

export default Home

export async function getStaticProps() {
  const data = await axios.get(`${ process.env.BASE_URL }/products?skip=0&limit=30`)
    .then(response => response.data)

  return {
    props: {
      data: data
    }
  }
}