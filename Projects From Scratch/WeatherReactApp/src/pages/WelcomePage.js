import React from 'react';
import Page from '../components/layout/Page'
import InfoCard from '../components/ui/InfoCard'
import { useStyles } from '../styles/pages/welcomePageStyles'

function WelcomePage({ id, idChange, changeTab, findLocation }) {
    const classes = useStyles()
    return (
        <Page id={'welcome'} idChange={idChange} changeTab={changeTab} tab={0} findLocation={findLocation}>
            <div className={classes.infoCard}>
                <InfoCard cardTitle={'Welcome to React Weather Channel'} cardSubTitle={'Search a Location to Get Started'}  >
                    <div className={classes.text}>
                        <p>At React Weather Channel you can find everything from summaries to detailed forecasts for your location.</p>
                        <p>Search a Location by entering a location in the search bar.</p>
                    </div>
                </InfoCard>
            </div>
        </Page >
    );
}

export default WelcomePage;