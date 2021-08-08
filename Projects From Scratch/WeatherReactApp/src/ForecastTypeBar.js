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
    },
    tabDiv: {
        "& button": {
            minWidth: '300px'
        }
    }

}));

export default function ForecastTypeBar({ id }) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        console.log('hit')
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    className={classes.tabDiv}
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label=""
                    centered
                >
                    <Tab className={classes.tab} label={<Link to={`/${id}`}>Today </Link>} index={0} id={id} />

                    <Tab className={classes.tab} label={<Link to={`/${id}/hourly`}>Hourly</Link>} index={1} id={id} />

                    <Tab className={classes.tab} label={<Link to={`/${id}/daily`}>Daily</Link>} index={2} id={id} />
                </Tabs>
            </AppBar>

        </div >
    );
}