import React, { createContext, useState, useEffect } from 'react'
import client from '../utils/shopifyConnect'

export const ShopifyContext = createContext()




export function ShopifyContextProvider(props) {

    const [cart, setCart] = useState({ checkout: {}, cartOpen: false })


    // useEffect(() => {
    //     const initializeCheckout = async () => {
    //         const checkout = await client.checkout.create()
    //         setCart({ ...cart, checkout: checkout })
    //     }
    //     initializeCheckout()
    // }, [])

    return (
        <ShopifyContext.Provider value={{ cart, setCart, client }} >
            {props.children}
        </ShopifyContext.Provider>
    )
}
