import React from 'react';
import Page from '../components/layout/Page'
import InfoCard from '../components/ui/InfoCard'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({

});


function WelcomePage({ id, idChange, changeTab, findLocation }) {
    const classes = useStyles()
    return (
        <Page id={''} idChange={idChange} changeTab={changeTab} tab={0} findLocation={findLocation}>

        </Page>
    );
}

export default WelcomePage;