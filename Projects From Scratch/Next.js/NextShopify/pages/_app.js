import '../styles/globals.css'
import React from 'react'
import { ShopifyContextProvider } from '../contexts/shopifyContext'
import { UserContextProvider } from '../contexts/userContext'
import { Provider } from 'next-auth/client'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <UserContextProvider>
        <ShopifyContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ShopifyContextProvider>
      </UserContextProvider>
    </Provider>
  )
}

export default MyApp
