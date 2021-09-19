import React, { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'

import { useSession } from "next-auth/client"

export const UserContext = createContext()
export function UserContextProvider(props) {

    const [session, loading] = useSession()
    const [user, setUser] = useState(false)

    const updateCartId = async (id) => {
        if (session) {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/user/updateCartId`, {
                email: user.email,
                cartId: id
            })
            if (!res.data.errors && res.data.success) {
                setUser({ ...user, cartId: id })
            }
        }
    }




    useEffect(() => {
        if (session && !user) {
            const email = session.user.email
            async function getUser() {
                try {
                    const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/user/getUser`, {
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
                        cartId: data.cartId
                    })
                } catch (e) {
                    console.log(e)
                }
            }
            getUser()
        }
    }, [session])


    return (
        <UserContext.Provider value={{ user, updateCartId }} >
            {props.children}
        </UserContext.Provider>
    )
}
