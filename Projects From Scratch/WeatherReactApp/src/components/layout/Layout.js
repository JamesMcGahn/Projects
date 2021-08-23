import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainNav from './MainNav';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#1a357c",
        backgroundImage: 'linear-gradient(#1a357c 9%,#99479b)',
        height: '100%',
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
    }
}));

function Layout(props) {
    const { unit, setUnit, setSearchResultLoc, weather, id, setTypeTabIndex, typeTabIndex, removeLocation, idChange } = props
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <MainNav unit={unit} setUnit={setUnit} setSearchResultLoc={setSearchResultLoc} weather={weather}
                id={id} setTypeTabIndex={setTypeTabIndex} typeTabIndex={typeTabIndex} removeLocation={removeLocation} idChange={idChange}
            />
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;