import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from '../../styles/ui/snackBarStyles'
function SnackBarAlert({ snackBar, setSnackBar }) {
    const classes = useStyles();
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackBar(false);
    };

    return (
        <div className={classes.snackBar}>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={snackBar}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Sorry, We Cant Find That Location. Try Again"
                action={<IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>}
            />
        </div>
    );
}

export default SnackBarAlert