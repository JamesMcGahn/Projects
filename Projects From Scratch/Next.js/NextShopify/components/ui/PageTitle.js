import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
    title: {
        position: 'relative',
        display: 'block',
        fontSize: props => props.fontSize ? props.fontSize : '2.2rem',

        [theme.breakpoints.down('sm')]: {
            fontSize: props => props.smfontSize ? props.smfontSize : '1.2rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: props => props.xsfontSize ? props.xsfontSize : '1.6rem',
        },
    },

    titleDiv: {
        color: props => props.color ? props.color : 'black',
        marginBottom: 0,
        padding: "1rem",
        fontFamily: 'Cinzel Decorative, cursive, arial',
        display: 'flex',
        justifyContent: 'center',
        width: "100%",
        '& span:before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '2px',
            bottom: 0,
            left: 0,
            backgroundColor: '#CBB682',
            visibility: 'visible',
            transform: props => props.animation ? 'scaleX(1)' : 'none',
            transition: 'all 0.3s ease-in-out',
        },
        '& span:hover:before': {
            visibility: props => props.animation ? 'hidden' : 'visible',
            transform: props => props.animation ? 'scaleX(0)' : 'none',
        }
    },


}));

function PageTitle({ title, fontSize, color, xsfontSize, smfontSize, animation, href }) {
    const classes = useStyles({ fontSize, color, xsfontSize, smfontSize, animation });
    return (

        <div className={classes.titleDiv} >
            {href ?
                <Link href={href}>
                    <a>
                        <span className={classes.title} >{title}</span>
                    </a>
                </Link>
                :
                <span className={classes.title} >{title}</span>
            }
        </div >

    );
}

export default PageTitle;