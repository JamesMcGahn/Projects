import React, { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'
import useLocalStorageState from '../hooks/useLocalStorage'
import { useSession } from "next-auth/client"
import { getCRSFToken } from '../helpers/getCRSFToken'

export const UserContext = createContext()
export function UserContextProvider(props) {

    const [session, loading] = useSession()
    const [user, setUser] = useState(false)
    const [orders, setOrderData] = useState(false)

    const [localCartID, setLocalCartId] = useLocalStorageState("user_cart", {})
    const [localHistory, setLocalHistory] = useLocalStorageState("browser_history", [])
    const [history, setHistory] = useState(localHistory)
    const [savedForLater, setSavedForLater] = useState()
    const [wishList, setWishList] = useState()

    const updateCartId = async (id) => {
        if (session) {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_SERVER}/api/user/user`, {
                email: user.email,
                cartId: id
            })
            if (!res.data.errors && res.data.success) {
                setUser({ ...user, cartId: id })
            }
        }
        else if (!session) {
            setLocalCartId({ cartId: id })
        }
    }

    const getOrdersData = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/user/orders`, {
                params: {
                    token: user.token
                }
            })
            const { data } = res.data
            setOrderData(data)
        } catch (e) {
            console.log(e)
        }
    }

    const saveCustomerHistory = async (product) => {
        if (history.length > 0 && history[0].node.handle === product.node.handle) return
        let newHistory = [product, ...history]
        if (user) {
            setHistory(newHistory)
            try {
                await axios.put(`${process.env.NEXT_PUBLIC_SERVER}/api/user/user`, {
                    email: user.email,
                    history: product
                })
            } catch (e) {
                console.log(e)
            }
        } else if (!user) {
            setHistory(newHistory)
            setLocalHistory(newHistory)
        }
    }


    const addToSaveForLater = async (product) => {
        console.log(product.node.merchandise)

        setSavedForLater([product.node.merchandise, ...savedForLater])
        try {
            await axios.put(`${process.env.NEXT_PUBLIC_SERVER}/api/user/saveForLater`, {
                email: user.email,
                saveForLater: product.node.merchandise
            })
        } catch (e) {
            console.log(e)
        }
    }

    const removeFromSaveForLater = async (id) => {
        const udpatedSaveforLater = savedForLater.filter(item => item.id !== id)
        setSavedForLater(udpatedSaveforLater)
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_SERVER}/api/user/saveForLater`, {
                headers: {
                    'Content-Type': 'application/json',
                    'XSRF-TOKEN': await getCRSFToken()
                },
                data: {
                    email: user.email,
                    id: id,
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    const addToWishList = async (item) => {
        setWishList([item, ...wishList])
        if (session) {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_SERVER}/api/user/wishlist`, {
                email: user.email,
                wishList: item
            })
        }
    }

    const removeFromWishList = async (id) => {
        const udpatedWishList = wishList.filter(item => item.id !== id)
        setWishList(udpatedWishList)
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_SERVER}/api/user/wishlist`, {
                headers: {
                    'Content-Type': 'application/json',
                    'XSRF-TOKEN': await getCRSFToken()
                },
                data: {
                    email: user.email,
                    id: id,
                }
            })
        } catch (e) {
            console.log(e)
        }
    }




    useEffect(() => {
        if (session && !user) {
            const email = session.user.email
            async function getUser() {
                try {
                    const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/user/user`, {
                        params: {
                            email: email
                        }
                    })
                    const { data } = res.data
                    setUser({
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        token: data.token,
                        cartId: data.cartId,

                    })
                    setHistory(data.history)
                    setSavedForLater(!data.saveForLater ? [] : data.saveForLater)
                    setWishList(!data.wishList ? [] : data.wishList)
                } catch (e) {
                    console.log(e)
                }
            }
            getUser()
        }
    }, [session])


    return (
        <UserContext.Provider value={{
            user, updateCartId, getOrdersData, orders, localCartID, setLocalCartId, history,
            saveCustomerHistory, addToSaveForLater, savedForLater, removeFromSaveForLater, addToWishList, removeFromWishList, wishList
        }} >
            {props.children}
        </UserContext.Provider>
    )
}
