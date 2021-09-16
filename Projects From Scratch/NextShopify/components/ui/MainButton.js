import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    btn: {
        padding: '.8rem 1.2rem',
        backgroundColor: props => props.backgroundColor,
        color: props => props.color,
        border: props => props.border,
        cursor: 'pointer',
        boxShadow: '3px 2px 5px rgb(0,0,0, 0.4)',
        width: props => props.width
    },
    btnDiv: {
        '& button:active': {
            border: '1px solid #e5e5e5'
        },
        '& button:hover': {
            backgroundColor: 'rgb(0,0,0, 0.8)',
            border: '1px solid rgb(0,0,0, 0.8)',
        }
    }
}));


function MainButton({ children, backgroundColor, color, border, width, ...rest }) {
    const classes = useStyles({ backgroundColor, color, border, width });
    return (
        <div className={classes.btnDiv}>
            <button className={classes.btn} {...rest}>
                {children}
            </button>
        </div >
    );
}

export default MainButton;