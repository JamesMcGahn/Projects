import React from 'react';
import { useStyles } from '../../styles/layout/footerStyles'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom'

function Footer(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.iconsCont}>
                <div className={classes.iconsText}>
                    <span>Connect With Us</span>
                </div>
                <div className={classes.icons}>
                    <a href="https://github.com/Almag3st" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
                    <a href="https://github.com/Almag3st" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                    <a href="https://github.com/Almag3st" target="_blank" rel="noopener noreferrer"> <YouTubeIcon /></a>
                    <a href="https://github.com/Almag3st" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
                </div>
            </div>
            <div className={classes.center}>
                <span>©2021 Copyright James McGahn</span>
            </div>
            <div className={classes.right}>
                <div className={classes.imgCont}>
                    <Link to={`/`}>
                        <img className={classes.logo} src="/images/ReactWeatherChannellogo.jpg" alt='logo' />
                    </Link>
                </div>
            </div>
        </div >
    );
}

export default Footer;