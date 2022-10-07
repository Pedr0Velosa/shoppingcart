import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '../styles/globals.css'
import Layout from '../src/components/Layout'
import type { AppProps } from 'next/app';
import CartProvider from '../src/hooks/CartContext/CartProvider';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartProvider>
      </ThemeProvider>
    </>
  )
}