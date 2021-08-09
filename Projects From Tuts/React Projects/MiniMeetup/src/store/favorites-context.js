import { createContext, useState } from "react";

export const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0
})

export function FavoriteContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([])

    function addFavorites(favoriteMeetup) {
        setUserFavorites((prevFavs) => {

            return [favoriteMeetup, ...prevFavs]
        })
    }

    function removeFavorites(id) {
        setUserFavorites((prevFavs) => {

            return prevFavs.filter(prev => prev.id !== id)
        })
    }

    function itemIsFavorite(id) {
        return userFavorites.some(meet => meet.id === id)
    }


    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorites: addFavorites,
        removeFavorites: removeFavorites,
        itemIsFavorite: itemIsFavorite
    }

    return <FavoriteContext.Provider value={context}>
        {props.children}
    </FavoriteContext.Provider>
}

