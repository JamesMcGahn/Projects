import React, { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'
import useLocalStorageState from '../hooks/useLocalStorage'
import { useSession } from "next-auth/client"

export const UserContext = createContext()
export function UserContextProvider(props) {

    const [session, loading] = useSession()
    const [user, setUser] = useState(false)
    const [orders, setOrderData] = useState(false)

    const [localCartID, setLocalCartId] = useLocalStorageState("user_cart", {})
    const [localHistory, setLocalHistory] = useLocalStorageState("browser_history", [])
    const [history, setHistory] = useState(localHistory)

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
                } catch (e) {
                    console.log(e)
                }
            }
            getUser()
        }
    }, [session])


    return (
        <UserContext.Provider value={{ user, updateCartId, getOrdersData, orders, localCartID, setLocalCartId, history, saveCustomerHistory }} >
            {props.children}
        </UserContext.Provider>
    )
}
