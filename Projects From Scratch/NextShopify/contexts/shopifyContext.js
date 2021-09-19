import React, { createContext, useState, useEffect, useContext } from 'react'
import { UserContext } from '../contexts/userContext'
import { client, gql } from '../utils/appolloClient'
import { useSession } from "next-auth/client"
import { createCart, updateCart, addLineToCart, allCategories, } from '../utils/graphQLQueries'
import axios from 'axios'

export const ShopifyContext = createContext()
export function ShopifyContextProvider(props) {
  const { updateCartId } = useContext(UserContext)
  const [cart, setCart] = useState(false)
  const [addedToCartItems, setAddedToCartItems] = useState([])
  const [collectionList, setCollectionList] = useState()
  const [user, setUser] = useState()
  const [session, loading] = useSession()
  const handleCollectionList = (list) => {

  }

  useEffect(() => {
    // TODO: change to server call 
    async function getCollections() {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/shopify/getCollections`)
      const { data } = res.data
      const cleanedList = data.filter(item => !item.node.title.toLowerCase().includes('home'))
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
      if (session) {
        updateCartId(id)
      }
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


  return (
    <ShopifyContext.Provider value={{ cart, setCart, handleCollectionList, collectionList, addedToCartItems, setAddedToCartItems, addToCart }} >
      {props.children}
    </ShopifyContext.Provider>
  )
}
