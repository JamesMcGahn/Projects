import React, { createContext, useState, useEffect } from 'react'
// import client from '../utils/shopifyConnect'
import { client, gql } from '../utils/appolloClient'
export const ShopifyContext = createContext()
import { createCart, allCategories } from '../utils/graphQLQueries'



export function ShopifyContextProvider(props) {

  const [cart, setCart] = useState({ checkout: {}, cartOpen: false })
  const [addedToCartItems, setAddedToCartItems] = useState([])
  const [collectionList, setCollectionList] = useState()

  const handleCollectionList = (list) => {

  }

  useEffect(() => {
    async function getCollections() {
      const categorySchema = allCategories()
      const categories = await client.query({
        query: gql`${categorySchema}`
      })
      const collectionsList = categories.data.collections.edges
      const collections = collectionsList.map(col => {
        return { handle: col.node.handle, image: col.node.image, title: col.node.title }
      })
      const cleanedList = collections.filter(item => !item.title.toLowerCase().includes('home'))
      setCollectionList(cleanedList)
    }
    getCollections()
  }, [])

  const getCart = async () => {
    const currentCart = {
      "cartInput": {
        "lines": [
          {
            "quantity": 1,
            "merchandiseId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDcwNTIyNTAzMTg3Mw=="
          }
        ],
      }
    }
    const cartschema = createCart()
    const carts = await client.mutate({
      mutation: gql`${cartschema}`,
      variables: currentCart
    })
    const cartData = carts.data.cartCreate.cart
    setCart(cartData)
  }


  // useEffect(() => {
  //     const initializeCheckout = async () => {
  //         const checkout = await client.checkout.create()
  //         setCart({ ...cart, checkout: checkout })
  //     }
  //     initializeCheckout()
  // }, [])

  return (
    <ShopifyContext.Provider value={{ cart, setCart, handleCollectionList, collectionList, addedToCartItems, setAddedToCartItems, getCart }} >
      {props.children}
    </ShopifyContext.Provider>
  )
}
