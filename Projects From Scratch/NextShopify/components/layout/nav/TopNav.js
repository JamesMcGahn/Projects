import React from 'react';
import { useStyles } from '../../../styles/TopNavStyles'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


function TopNav(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.social}>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
            </div>
            <div className={classes.message}>
                <p>Free Shipping On All Orders $65+</p>
            </div>
            <div className={classes.nav}>
                <ul className={classes.list}>
                    <li>Home</li>
                    <li>Wishlist</li>
                </ul>
            </div>
        </div>
    );
}

export default TopNav;