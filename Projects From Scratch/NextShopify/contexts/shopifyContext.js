import React, { createContext, useState, useEffect } from 'react'
// import client from '../utils/shopifyConnect'
import { client, gql } from '../utils/appolloClient'

import { createCart, updateCart, addLineToCart, allCategories, } from '../utils/graphQLQueries'


export const ShopifyContext = createContext()
export function ShopifyContextProvider(props) {

  const [cart, setCart] = useState(false)
  const [addedToCartItems, setAddedToCartItems] = useState([])
  const [collectionList, setCollectionList] = useState()
  const [user, setUser] = useState()
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

  const addToCart = async (id, qty) => {
    if (!cart) {
      const addedItems = {
        "cartInput": {
          "lines": [
            {
              "quantity": qty,
              "merchandiseId": `${id}`
            }
          ],
        }
      }
      const cartschema = createCart()
      const carts = await client.mutate({
        mutation: gql`${cartschema}`,
        variables: addedItems
      })
      const cartData = carts.data.cartCreate.cart
      setCart(cartData)

    } else {
      const isItemInCart = cart.lines.edges.filter(item => item.node.merchandise.id === id)

      if (isItemInCart.length > 0) {
        const updateCartScema = updateCart()
        const updatedItems = {
          "cartId": `${cart.id}`,
          "lines": [
            {
              "id": `${isItemInCart[0].node.id}`,
              "quantity": isItemInCart[0].node.quantity + qty,
              "merchandiseId": `${isItemInCart[0].node.merchandise.id}`
            }
          ]
        }
        const carts = await client.mutate({
          mutation: gql`${updateCartScema}`,
          variables: updatedItems
        })
        const cartData = carts.data.cartLinesUpdate.cart
        setCart(cartData)
      } else {
        const addedItems = {
          "cartId": `${cart.id}`,
          "lines": [
            {
              "quantity": qty,
              "merchandiseId": `${id}`
            }
          ],
        }
        const addLineCartSchema = addLineToCart()
        const carts = await client.mutate({
          mutation: gql`${addLineCartSchema}`,
          variables: addedItems
        })
        const cartData = carts.data.cartLinesAdd.cart
        setCart(cartData)
      }
    }
  }


  // useEffect(() => {
  //     const initializeCheckout = async () => {
  //         const checkout = await client.checkout.create()
  //         setCart({ ...cart, checkout: checkout })
  //     }
  //     initializeCheckout()
  // }, [])

  return (
    <ShopifyContext.Provider value={{ cart, setCart, handleCollectionList, collectionList, addedToCartItems, setAddedToCartItems, addToCart }} >
      {props.children}
    </ShopifyContext.Provider>
  )
}
