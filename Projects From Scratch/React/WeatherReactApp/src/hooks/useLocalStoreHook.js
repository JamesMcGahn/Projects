import { useState, useEffect } from 'react'

function useLocalStoreHook() {
    const [state, setState] = useState(() => {
        try {
            const data = window.localStorage.getItem("locations")
            return JSON.parse(data) || [];
        } catch (e) {
            console.log(e)
            return []
        }

    })

    useEffect(() => {
        try {

            window.localStorage.setItem('locations', JSON.stringify(state))

        } catch (e) {
            console.log(e)
        }
    }, [state, setState]);

    return [state, setState]
}

export default useLocalStoreHook