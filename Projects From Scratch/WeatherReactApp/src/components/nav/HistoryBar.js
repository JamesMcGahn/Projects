import React from 'react';
import { makeStyles, alpha } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HistoryBarItem from './HistoryBarItem'


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100wh',
    },
    tab: {
        borderRight: '1px solid',
        padding: 0,
        width: '5 rem',
        borderRightColor: alpha(theme.palette.common.white, 0.12),
        "& a": {
            display: 'block',
            color: 'white',
            textDecoration: "none",
            width: '100%',
            height: '100%',
            fontSize: '.875rem',

        },
        "& img": {
            width: '10%',
        },

    },
    wrapper: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between'
    }
}));

export default function HistoryBar({ weather, removeLocation }) {
    const classes = useStyles();
    const firstSix = [...weather].reverse().filter((item, index) => index <= 6)



    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: '#1b4de4' }} >
                <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="Location History"
                    value={false}
                >

                    {firstSix.map((loc, i) => {

                        return (

                            <Tab className={classes.tab} classes={{ root: classes.tab, wrapper: classes.wrapper }}
                                label={
                                    <HistoryBarItem id={loc.id} icon={`http://openweathermap.org/img/wn/${loc.current.weather[0].icon}@2x.png`}
                                        temp={loc.current.temp} city={loc.city} removeLocation={removeLocation}
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