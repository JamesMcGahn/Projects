import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
            transform: 'scaleX(1)',
            transition: 'all 0.3s ease-in-out',
        },
        '& span:hover:before': {
            visibility: 'hidden',
            transform: 'scaleX(0)',
        }
    },


}));

function PageTitle({ title, fontSize, color, xsfontSize, smfontSize }) {
    const classes = useStyles({ fontSize, color, xsfontSize, smfontSize });
    return (
        <div className={classes.titleDiv} ><span className={classes.title} >{title}</span></div >
    );
}

export default PageTitle;