import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom'
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100wh',
    },
    tab: {
        "& a": {
            display: 'block',
            color: 'black',
            textDecoration: "none",
            width: '100%',
            height: '100%',
        },
        "& img": {
            width: '15%',
            border: '1px solid black',

        }

    }
}));

export default function HistoryBar({ weather }) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const history = weather.reverse();
    const handleChange = (event, newValue) => {
        console.log('hit button', event, newValue);

        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };


    const weatherRev = [...weather].reverse()
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="Location History"
                    value={false}
                >
                    {[...weather].reverse().map((loc, i) => {
                        if (i >= 6) return
                        return (
                            <Tab className={classes.tab} label={<Link to={`/${loc.id}`}   >
                                <img src={`http://openweathermap.org/img/wn/${loc.current.weather[0].icon}@2x.png`} />
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