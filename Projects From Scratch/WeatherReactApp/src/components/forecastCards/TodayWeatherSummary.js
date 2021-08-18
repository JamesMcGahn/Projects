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
        '& h2, h4': {
            padding: 0,
            margin: 0
        },
        '& h2': {
            fontSize: '1.3rem',
        }
    },
    icon: {
        padding: '.5rem',
        width: '30%',
        textAlign: 'center',
        fontSize: '1.5rem',
        '& img': {
            width: '100%',
            marginBottom: 0
        }
    },
    temp: {
        fontSize: '4.6rem',
        margin: '0',
        padding: '0',
        fontFamily: 'Metabold',
    },
    desscript: {
        fontSize: '1.4rem',
    },
    time: {
        fontSize: '1rem',
        fontFamily: 'Meta',
        fontWeight: 400
    },
});



function TodayWeatherSummary({ city, time, temp, description, unit, icon, min, max }) {
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
                <h4 class={classes.desscript}>{description.replace(/\b\w/g, l => l.toUpperCase())}</h4>
            </div>
            <div className={classes.icon}>
                <img alt="forecast-icon" src={icon} />
                {`${Math.trunc(min)}° / ${Math.trunc(max)}°`}
            </div>
        </Card>
    );
}

export default TodayWeatherSummary;