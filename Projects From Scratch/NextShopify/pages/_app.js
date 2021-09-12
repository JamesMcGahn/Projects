import '../styles/globals.css'
import React from 'react'
import { ShopifyContextProvider } from '../contexts/shopifyContext'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  return (
    <ShopifyContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShopifyContextProvider>
  )
}

export default MyApp
