import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    btn: {
        padding: '.8rem 1.2rem',
        backgroundColor: props => props.backgroundColor,
        color: props => props.color,
        border: props => props.border ? props.border : '1px solid black',
        cursor: 'pointer',
        boxShadow: '3px 2px 5px rgba(0,0,0, 0.4)',
        width: props => props.width
    },
    btnDiv: {
        '& button:active': {
            border: '1px solid #e5e5e5'
        },
        '& button:hover': {
            backgroundColor: 'rgba(0,0,0, 0.9)',
            border: '1px solid rgba(0,0,0, 0.9)',
            color: props => props.hoverColor ? props.hoverColor : 'black'
        }
    }
}));


function MainButton({ children, hoverColor, backgroundColor, color, border, width, ...rest }) {
    const classes = useStyles({ hoverColor, backgroundColor, color, border, width });
    return (
        <div className={classes.btnDiv}>
            <button className={classes.btn} {...rest}>
                {children}
            </button>
        </div >
    );
}

export default MainButton;