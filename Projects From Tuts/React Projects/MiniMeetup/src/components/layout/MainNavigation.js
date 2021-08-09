import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import { FavoriteContext } from '../../store/favorites-context'

function MainNavigation(props) {
    const { totalFavorites } = useContext(FavoriteContext)
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <ul>
                <li>
                    <Link to="/">All Meetups</Link>
                </li>
                <li>
                    <Link to="/new-meetup">New Meetups</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites
                        <span className={classes.badge}>{totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default MainNavigation;