import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

import { useSession } from "next-auth/client"

export const UserContext = createContext()
export function UserContextProvider(props) {

    const [session, loading] = useSession()
    const [user, setUser] = useState(false)
    const ham = 'cheese'

    useEffect(() => {
        if (session && !user) {
            const email = session.user.email
            console.log(email)
            async function getUser() {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/user/getuser`, {
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
                })
            }
            getUser()
        }
    }, [session])


    return (
        <UserContext.Provider value={{ user }} >
            {props.children}
        </UserContext.Provider>
    )
}
