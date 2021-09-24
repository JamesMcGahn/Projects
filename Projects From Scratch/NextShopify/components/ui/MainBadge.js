import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    btn: {
        padding: '.3rem 1.2rem',
        backgroundColor: props => props.backgroundColor,
        color: props => props.color,
        border: props => props.border ? props.border : '1px solid black',
        borderRadius: '10px',
        cursor: 'pointer',
        boxShadow: '2px 2px 1px rgba(0,0,0, 0.3)',
        width: props => props.width
    },
    btnDiv: {
        '& button:active': {
            border: '1px solid black'
        },
        '& button:hover': {
            backgroundColor: props => props.hoverBackgroundColor ? props.hoverBackgroundColor : 'rgba(0,0,0, 0.9)',
            border: props => props.hoverBorder ? props.hoverBorder : '1px solid rgba(29, 29, 29, 0.5)',
        }
    }
}));


function MainBadge({ children, hoverBorder, backgroundColor, hoverBackgroundColor, color, border, width, ...rest }) {
    const classes = useStyles({ backgroundColor, color, hoverBackgroundColor, border, width, hoverBorder });
    return (
        <div className={classes.btnDiv}>
            <button className={classes.btn} {...rest}>
                {children}
            </button>
        </div >
    );
}

export default MainBadge;