import React, { createContext, useState, useEffect } from 'react'
// import client from '../utils/shopifyConnect'
import { client, gql } from '../utils/appolloClient'
export const ShopifyContext = createContext()




export function ShopifyContextProvider(props) {

  const [cart, setCart] = useState({ checkout: {}, cartOpen: false })
  const [addedToCartItem, setAddedToCartItem] = useState()
  const [collectionList, setCollectionList] = useState()

  const handleCollectionList = (list) => {

  }

  useEffect(() => {
    async function getCollections() {
      const tacos = await client.query({
        query: gql`{
            collections(first: 50){
            edges{
              node {
                handle
                title
                image {
                  originalSrc
                  altText
                }
              }
            }
          } 
          }`
      })
      const collectionsList = tacos.data.collections.edges
      const collections = collectionsList.map(col => {
        return { handle: col.node.handle, image: col.node.image, title: col.node.title }
      })
      const cleanedList = collections.filter(item => !item.title.toLowerCase().includes('home'))
      setCollectionList(cleanedList)
    }
    getCollections()
  }, [])




  // useEffect(() => {
  //     const initializeCheckout = async () => {
  //         const checkout = await client.checkout.create()
  //         setCart({ ...cart, checkout: checkout })
  //     }
  //     initializeCheckout()
  // }, [])

  return (
    <ShopifyContext.Provider value={{ cart, setCart, handleCollectionList, collectionList, addedToCartItem, setAddedToCartItem }} >
      {props.children}
    </ShopifyContext.Provider>
  )
}
