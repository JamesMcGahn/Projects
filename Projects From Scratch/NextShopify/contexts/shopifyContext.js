import React, { createContext, useState, useEffect, useContext } from 'react'
import { UserContext } from '../contexts/userContext'
import { useSession } from "next-auth/client"
import axios from 'axios'
import { getCRSFToken } from '../helpers/getCRSFToken'


export const ShopifyContext = createContext()

export function ShopifyContextProvider(props) {
  const { updateCartId, user } = useContext(UserContext)
  const [cart, setCart] = useState(false)
  const [addedToCartItems, setAddedToCartItems] = useState([])
  const [collectionList, setCollectionList] = useState()
  const [session, loading] = useSession()
  const [isCartLoading, setIsCartLoading] = useState(false)

  async function getCart(cartId) {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/shopify/getCart`, {
        params: {
          cartId: cartId
        }
      })
      const { data } = res.data
      setCart(data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    async function getCollections() {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/shopify/getCollections`)
      const { data } = res.data
      const cleanedList = data.filter(item => !item.node.title.toLowerCase().includes('home'))
      setCollectionList(cleanedList)
      setIsCartLoading(false)
    }
    getCollections()
  }, [])

  useEffect(() => {
    if (!cart) {
      if (session && user.cartId) {
        setIsCartLoading(true)
        getCart(user.cartId)
      }
    }
  }, [session, user])

  const addToCart = async (merchId, qty) => {
    if (!cart) {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/shopify/makeCart`,
        {
          merchId: merchId,
          qty: qty,
          email: user.email ? user.email : null,
          accessToken: user.token ? user.token : null
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'XSRF-TOKEN': await getCRSFToken()
          }
        }
      )
      const { data } = res.data
      setCart(data)
      if (session) updateCartId(data.id)
    } else {
      const isItemInCart = cart.lines.edges.filter(item => item.node.merchandise.id === merchId)
      if (isItemInCart.length > 0) {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/shopify/updateCartLines`,
          {
            cartId: cart.id,
            lineId: `${isItemInCart[0].node.id}`,
            qty: isItemInCart[0].node.quantity + qty,
            merchId: `${isItemInCart[0].node.merchandise.id}`
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'XSRF-TOKEN': await getCRSFToken()
            }
          }
        )
        const { data } = res.data
        setCart(data)
      } else {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/shopify/addCartLines`,
          {
            cartId: cart.id,
            qty: qty,
            merchId: merchId,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'XSRF-TOKEN': await getCRSFToken()
            }
          }
        )
        const { data } = res.data
        setCart(data)
      }
    }
  }


  return (
    <ShopifyContext.Provider value={{ cart, setCart, collectionList, addedToCartItems, setAddedToCartItems, addToCart, isCartLoading }} >
      {props.children}
    </ShopifyContext.Provider>
  )
}
