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
        boxShadow: '3px 2px 5px rgb(0,0,0, 0.4)',
        width: props => props.width
    },
    btnDiv: {
        '& button:active': {
            border: '1px solid black'
        },
        '& button:hover': {
            backgroundColor: 'rgb(0,0,0, 0.9)',
            border: '1px solid rgb(0,0,0, 0.9)',
        }
    }
}));


function MainBadge({ children, backgroundColor, color, border, width, ...rest }) {
    const classes = useStyles({ backgroundColor, color, border, width });
    return (
        <div className={classes.btnDiv}>
            <button className={classes.btn} {...rest}>
                {children}
            </button>
        </div >
    );
}

export default MainBadge;