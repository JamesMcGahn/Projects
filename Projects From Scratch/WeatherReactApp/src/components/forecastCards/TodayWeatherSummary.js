import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
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
        color: 'white',
    },
    alert: {
        "& a": {
            textDecoration: 'none'
        },
        "& svg": {
            color: 'white',
        }

    },
    lowHigh: {
        marginTop: 0,
        fontSize: '1.8rem',
        fontFamily: 'Metabold',
    },
    warn: {
        '& svg': {
            color: 'yellow'
        },
    }
});



function TodayWeatherSummary({ id, city, time, temp, description, unit, icon, min, max, rainChance, alert }) {
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
                {alert ?
                    <span className={classes.alert} >
                        <Link to={`/alerts/${id}`} >

                            <span className={classes.warn}> <FontAwesomeIcon icon={faExclamationCircle} size="sm" /></span>
                            <span className={classes.rain}>{` ${alert.event} `}</span> <FontAwesomeIcon icon={faChevronRight} size="sm" />
                        </Link>
                    </span>
                    : <h5 className={classes.rain}>{Math.floor(rainChance)}% chance of rain today</h5>}
            </div>
            <div className={classes.icon}>
                <img alt="forecast-icon" src={icon} />
                <span className={classes.lowHigh}>{`${Math.trunc(min)}° / ${Math.trunc(max)}°`}</span>
            </div>
        </Card>
    );
}

export default TodayWeatherSummary;