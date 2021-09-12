import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    btn: {
        padding: '.8rem 1.2rem',
        backgroundColor: 'black',
        color: 'white',
        border: '1px solid black',
        cursor: 'pointer',
        boxShadow: '3px 2px 5px rgb(0,0,0, 0.4)'
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


function MainButton({ children }) {
    const classes = useStyles();
    return (
        <div className={classes.btnDiv}>
            <button className={classes.btn}>
                {children}
            </button>
        </div>
    );
}

export default MainButton;