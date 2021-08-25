import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainNav from './MainNav';
import SnackBarAlert from '../ui/SnackBar';
import Footer from './Footer';
import { useStyles } from '../../styles/layout/layoutStyles'


function Layout(props) {
    const { unit, setUnit, setSearchResultLoc, weather, id, setTypeTabIndex, typeTabIndex, removeLocation, idChange, snackBar, setSnackBar } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <MainNav unit={unit} setUnit={setUnit} setSearchResultLoc={setSearchResultLoc} weather={weather}
                id={id} setTypeTabIndex={setTypeTabIndex} typeTabIndex={typeTabIndex} removeLocation={removeLocation} idChange={idChange}
                setSnackBar={setSnackBar}
            />
            {props.children}
            {snackBar ? <SnackBarAlert snackBar={snackBar} setSnackBar={setSnackBar} /> : null}
            <Footer />
        </div>
    );
}

export default Layout;