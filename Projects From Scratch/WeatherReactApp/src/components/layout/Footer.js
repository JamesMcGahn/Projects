import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        minHeight: '20vh',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    iconsCont: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5px 0 5px 0'

    },
    iconsText: {
        fontSize: '1.3rem',
        marginRight: '10px',
    },
    icons: {
        '& a': {
            textDecoration: 'none',
        },
        '& svg': {
            color: '#3f51b5',
            fontSize: '2rem',
            marginRight: '3px'
        },
    },
    center: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-end',
        '& span': {
            fontSize: '.8rem',
            marginBottom: '3px'
        },
        '@media (max-width: 650px)': {
            width: '100%',
            justifyContent: 'center',
        },
    },
    right: {
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-end',
        '@media (max-width: 650px)': {
            width: '100%',
            justifyContent: 'center',
        }

    },
    imgCont: {
        width: '30%',

        '& img': {
            width: '30%',
        },
        '@media (max-width: 650px)': {
            width: '30%',
            margin: '5px 0 5px 0',
            '& img': {
                width: '100%',
            },
        },
    }

});


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