import React, { useContext } from 'react';
import { FavoriteContext } from '../store/favorites-context'
import MeetupList from '../components/meetups/MeetupList'

function FavoritesPage(props) {
    const { favorites } = useContext(FavoriteContext)
    return (
        <div>
            <h1>My Favorites</h1>
            {favorites.length > 0 ? <MeetupList meetups={favorites} /> : <p>Add Some Favorites</p>}
        </div>
    );
}

export default FavoritesPage;