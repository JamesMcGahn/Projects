import { useState, useEffect } from 'react'

function useLocalStoreHook() {
    const [state, setState] = useState(() => {
        let data
        try {
            const locations = JSON.parse(window.localStorage.getItem('locations'))
            if (locations.length > 0) {
                data = locations
            } else {
                data = []
            }
        } catch (e) {
            console.log(e)
        }
        return data
    })

    useEffect(() => {
        try {
            window.localStorage.setItem('locations', JSON.stringify(state))
        } catch (e) {
            console.log(e)
        }
    }, [state, setState]);
    console.log(state)
    return [state, setState]
}

export default useLocalStoreHook