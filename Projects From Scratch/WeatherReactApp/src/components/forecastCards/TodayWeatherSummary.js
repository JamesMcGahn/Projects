import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        width: '50%',
        height: '20vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    text: {
        padding: '.5rem',
        width: '60%',
        '& h2, h4': {
            padding: 0,
            margin: 0
        },
    },
    icon: {
        padding: '.5rem',
        width: '30%',
        '& img': {
            width: '100%'
        }
    },
    temp: {
        fontSize: '4rem',
        margin: '0',
        padding: '0',
    },
    desscript: {
        fontSize: '1.2rem',
    }
});



function TodayWeatherSummary({ city, time, temp, description, unit, icon }) {
    const classes = useStyles()
    const convertTime = new Date(time * 1000).toLocaleTimeString('en-US', { timeStyle: 'short' })
    return (
        <Card className={classes.root}>
            <div className={classes.text}>
                <h2>{city} Weather</h2>
                <h4>As of {convertTime}</h4>
                <span className={classes.temp}>
                    {`${Math.ceil(temp)}${unit === 'imperial' ? "°F " : "°C"}`}

                </span>
                <h4 class={classes.desscript}>{description.replace(/\b\w/g, l => l.toUpperCase())}</h4>
            </div>
            <div className={classes.icon}>
                <img alt="forecast-icon" src={icon} />
            </div>
        </Card>
    );
}

export default TodayWeatherSummary;