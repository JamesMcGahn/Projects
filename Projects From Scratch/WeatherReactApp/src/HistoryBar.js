import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100wh',
    },
    tab: {
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
            border: '1px solid black',

        }

    }
}));

export default function HistoryBar({ weather }) {
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
                            <Tab className={classes.tab} label={<Link to={`/${loc.id}`}   >
                                <img alt="forecast-icon" src={`http://openweathermap.org/img/wn/${loc.current.weather[0].icon}@2x.png`} />
                                {`
                            ${Math.trunc(loc.current.temp)}° ${loc.city}`}</Link>} index={i} id={loc.id} key={loc.id}>
                            </Tab>
                        )
                    })}
                </Tabs>
            </AppBar>

        </div>
    );
}