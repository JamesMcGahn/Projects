import React, { createContext, useState, useEffect, useContext } from 'react'
import { UserContext } from '../contexts/userContext'
import { useSession } from "next-auth/client"
import axios from 'axios'
import { getCRSFToken } from '../helpers/getCRSFToken'
export const ShopifyContext = createContext()

export function ShopifyContextProvider(props) {
  const { updateCartId, user, localCartID, } = useContext(UserContext)
  const [cart, setCart] = useState(false)
  const [addedToCartItems, setAddedToCartItems] = useState([])
  const [collectionList, setCollectionList] = useState()
  const [session, loading] = useSession()
  const [isCartLoading, setIsCartLoading] = useState(true)



  async function getCart(cartId) {
    setIsCartLoading(true)
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/cart/cart`, {
        params: {
          cartId: cartId
        }
      })
      const { data } = res.data
      setCart(data)
      setIsCartLoading(false)
    } catch (error) {
      setIsCartLoading(false)
      console.log(error)
    }
  }


  useEffect(() => {
    async function getCollections() {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/products/collections`)
      const { data } = res.data
      const cleanedList = data.filter(item => !item.node.title.toLowerCase().includes('home'))
      setCollectionList(cleanedList)
    }
    getCollections()

  }, [])


  useEffect(() => {
    // if customer is logged in -- check & get their cartID from user 
    // else if - customer is a guest -- check & get their cart from local
    if (!cart && session && user.cartId) {
      getCart(user.cartId)
    } else if (!cart && !session && localCartID?.cartId) {
      getCart(localCartID.cartId)
    } else {
      setIsCartLoading(false)
    }
  }, [session, user])

  const addToCart = async (merchId, qty) => {
    // if no cart, make the cart and add the items
    setIsCartLoading(true)
    if (!cart) {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/cart/cart`,
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
      updateCartId(data.id)
      setIsCartLoading(false)
    } else {
      // if there is a cart, check to see if the item is already in the cart. if it is add the additional qty
      const isItemInCart = cart.lines.edges.filter(item => item.node.merchandise.id === merchId)
      if (isItemInCart.length > 0) {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_SERVER}/api/cart/cartLines`,
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
        setIsCartLoading(false)
      } else {
        // the item is not in the cart, so add the item to the cart
        const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/cart/cartLines`,
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
        setIsCartLoading(false)
      }
    }
  }

  async function deleteLine(id) {
    setIsCartLoading(true)

    try {
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER}/api/cart/cartLines`,

        {
          headers: {
            'Content-Type': 'application/json',
            'XSRF-TOKEN': await getCRSFToken()
          },
          data: {

            cartId: cart.id,
            lineId: `${id}`,

          }
        }
      )
      const { data } = res.data
      setCart(data)
      setIsCartLoading(false)
    } catch (e) {
      console.log(e)
    }
  }



  return (
    <ShopifyContext.Provider value={{ cart, setCart, collectionList, addedToCartItems, setAddedToCartItems, addToCart, isCartLoading, deleteLine, setIsCartLoading }} >
      {props.children}
    </ShopifyContext.Provider>
  )
}
