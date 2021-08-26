import React from 'react';
import Card from '@material-ui/core/Card';
import { useStyles } from '../../styles/cards/todayWeatherSummaryStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



function TodayWeatherSummary({ id, city, time, temp, description, unit, icon, min, max, rainChance, alert, state, country }) {
    const classes = useStyles()
    const convertTime = new Date(time * 1000).toLocaleTimeString('en-US', { timeStyle: 'short' })
    return (
        <Card className={classes.root}>
            <div className={classes.text}>
                <h2>{`${city}, ${state ? `${state}, ${country} ` : `${country}`}`}</h2>
                <h4 className={classes.time}>As of {convertTime}</h4>
                <span className={classes.temp}>
                    {`${Math.ceil(temp)}${unit === 'imperial' ? "°F " : "°C"}`}

                </span>
                <h4 className={classes.desscript}>{description.replace(/\b\w/g, l => l.toUpperCase())}</h4>
                {alert ?
                    <span className={classes.alert} >
                        <Link to={`/alerts/${id}`} >

                            <span className={classes.warn}> <FontAwesomeIcon icon={faExclamationCircle} size="sm" /></span>
                            <span className={classes.rain}>{` ${alert.event.replace(/\b\w/g, l => l.toUpperCase())} Alert `}</span> <FontAwesomeIcon icon={faChevronRight} size="1x" />
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