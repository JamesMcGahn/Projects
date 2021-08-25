import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HistoryBarItem from './HistoryBarItem'
import { useStyles } from '../../styles/nav/historyBarStyles'

export default function HistoryBar({ weather, removeLocation, idChange }) {
    const classes = useStyles();
    const firstSix = weather ? weather.reverse().filter((item, index) => index <= 6) : []

    return (
        <div className={classes.root}>
            <AppBar position="static" classes={{ root: classes.root }} >
                <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="Location History"
                    value={false}
                    variant="scrollable"
                >

                    {firstSix.map((loc, i) => {

                        return (

                            <Tab className={classes.tab} classes={{ root: classes.tab, wrapper: classes.wrapper }}
                                label={
                                    <HistoryBarItem id={loc.id} icon={`http://openweathermap.org/img/wn/${loc.current.weather[0].icon}@2x.png`}
                                        temp={loc.current.temp} city={loc.city} removeLocation={removeLocation}
                                        alert={loc.hasOwnProperty('alerts') ? loc.alerts[0] : false} idChange={idChange}
                                    />
                                } index={i} id={loc.id} key={loc.id}
                            />

                        )
                    })}
                </Tabs>
            </AppBar>

        </div>
    );
}