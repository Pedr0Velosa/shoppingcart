import { ThemeProvider } from 'styled-components'
import '@styles/globals.css'
import Layout from '@components/Layout'
import type { AppProps } from 'next/app';
import CartProvider from '@lib/contexts/CartContext/CartProvider';
import FilterProvider from '@lib/contexts/FilterContext/FilterProvider';
import { Hydrate, QueryClient, QueryClientProvider, DehydratedState } from 'react-query'
import { useRef } from 'react'

interface ThemeInterface {
  colors: {
    primary: string
  }
}

const theme: ThemeInterface = {
  colors: {
    primary: '#0e64c9',
  },
}

export default function App({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>): JSX.Element {

  const queryClient = useRef(new QueryClient())

  return (
    <>
      <QueryClientProvider client={queryClient.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <FilterProvider>
              <CartProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </CartProvider>
            </FilterProvider>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}