import React, { useContext } from 'react';
import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import { FavoriteContext } from '../../store/favorites-context'

function Meetupitem(props) {
    const { image, description, title, address, id } = props;
    const { itemIsFavorite, removeFavorites, addFavorites } = useContext(FavoriteContext)
    const favorite = itemIsFavorite(id)
    const toggleFavorites = () => {

        if (favorite) {
            removeFavorites(id)
        } else {
            addFavorites({
                id: id,
                title: title,
                description: description,
                image: image,
                address: address,
            })
        }
    }
    return (
        <Card>
            <li className={classes.item}>
                <div className={classes.image}>
                    <img src={image} alt={title} />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                    <p>{description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavorites}>{favorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
                </div>
            </li>
        </Card>
    );
}

export default Meetupitem;