import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.05)',
        color: 'white',
        padding: '10px 5px 10px 5px'
    },
    text: {

        width: '60%',
        height: '100%',
        marginTop: '20px',
        '& h2, h4': {
            padding: 0,
            margin: 0
        },
        '& h2': {
            fontSize: '1.3rem',
        },

    },
    icon: {
        padding: '.5rem',
        width: '30%',
        textAlign: 'center',
        fontSize: '1.5rem',
        '& img': {
            width: '90%',
            marginBottom: 0
        }
    },
    temp: {
        fontSize: '4.8rem',
        margin: '0',
        padding: '0',
        fontFamily: 'Metabold',
    },
    desscript: {
        fontSize: '1.45rem',
        fontFamily: 'Metabold',
    },
    time: {
        fontSize: '1.2rem',
        fontFamily: 'Meta',
        fontWeight: 400
    },
    rain: {
        fontSize: '1.2rem',
        margin: '0',
    },
    lowHigh: {
        marginTop: 0,
        fontSize: '1.8rem',
        fontFamily: 'Metabold',
    }
});



function TodayWeatherSummary({ city, time, temp, description, unit, icon, min, max, rainChance }) {
    const classes = useStyles()
    const convertTime = new Date(time * 1000).toLocaleTimeString('en-US', { timeStyle: 'short' })
    return (
        <Card className={classes.root}>
            <div className={classes.text}>
                <h2>{city} Weather</h2>
                <h4 className={classes.time}>As of {convertTime}</h4>
                <span className={classes.temp}>
                    {`${Math.ceil(temp)}${unit === 'imperial' ? "°F " : "°C"}`}

                </span>
                <h4 className={classes.desscript}>{description.replace(/\b\w/g, l => l.toUpperCase())}</h4>
                <h5 className={classes.rain}>{Math.floor(rainChance)}% chance of rain today</h5>
            </div>
            <div className={classes.icon}>
                <img alt="forecast-icon" src={icon} />
                <span className={classes.lowHigh}>{`${Math.trunc(min)}° / ${Math.trunc(max)}°`}</span>
            </div>
        </Card>
    );
}

export default TodayWeatherSummary;