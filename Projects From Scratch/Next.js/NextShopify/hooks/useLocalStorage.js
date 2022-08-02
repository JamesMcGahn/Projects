import { useState, useEffect } from 'react'

function useLocalStoreHook(itemName, initalValue) {
    const [state, setState] = useState(() => {
        if (typeof window !== "undefined") {
            try {
                const data = window.localStorage.getItem(itemName)
                return JSON.parse(data) || initalValue;
            } catch (e) {
                console.log(e)
                return []
            }
        }
    })

    useEffect(() => {
        if (typeof window !== "undefined") {
            try {
                window.localStorage.setItem(itemName, JSON.stringify(state))
            } catch (e) {
                console.log(e)
            }
        }
    }, [state, setState]);

    return [state, setState]
}

export default useLocalStoreHook