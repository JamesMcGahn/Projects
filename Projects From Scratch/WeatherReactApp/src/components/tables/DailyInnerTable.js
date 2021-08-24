import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faTint, faArrowUp, faArrowDown, faSun, faCloudMoon, faCloud } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TableBody from '@material-ui/core/TableBody';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    root: {

    },
    expandCol: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        alignContent: "center",
        textAlign: "left",
        width: "100%",
        marginTop: '10px',
        marginBottom: '10px'
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    headerIcons: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        minHeight: "30px"
    }
    , date: {
        width: '90%',
        fontSize: "1rem"
    },
    temp: {
        fontSize: "3.2rem",
        lineHeight: "1",
        fontFamily: 'MetaBold'
    },
    weatherIcon: {
        width: '40%',
        '& img': {
            width: '50%',
        }
    },
    openIcon: {
        marginLeft: '100px'
    },
    littleIcons: {
        width: '45%',
        textAlign: 'center',
        '& svg': {
            fontSize: '1.2rem',
            color: '#1b4de4',
            marginRight: '5px',
        }
    },
    iconOne: {
        marginBottom: '1rem'
    },
    bottomContent: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    bottomCard: {
        width: '90%',
        '& svg': {
            fontSize: '1.2rem',
            color: '#1b4de4',
            marginRight: '5px',
        }
    },
    LeftRight: {
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        padding: '5px',
    },
    iconTitle: {
        display: 'block'
    }
});

function DailyInnerTable({ dayTime, weather, unit, openRow, timezone }) {
    const classes = useStyles();
    const sunRise = new Date(weather.sunrise * 1000).toLocaleTimeString('en-US', { timeStyle: 'short', timeZone: timezone })
    const sunSet = new Date((weather.sunset) * 1000).toLocaleTimeString('en-US', { timeStyle: 'short', timeZone: timezone })
    const moonRise = new Date((weather.moonrise) * 1000).toLocaleTimeString('en-US', { timeStyle: 'short', timeZone: timezone })
    const moonSet = new Date((weather.moonset) * 1000).toLocaleTimeString('en-US', { timeStyle: 'short', timeZone: timezone })


    function createCellData(date, temp, icon, litteIconOne, litteIconOneText, litteIconTwo, litteIconTwoText, btmIconOne, topLeftText, topLeftValue, btmIconTwo, topRightText, topRightValue, btmIconThree, btmLeftText, btmLeftValue, btmIconFour, btmRightValue, btmRightText) {
        return { date, temp, icon, litteIconOne, litteIconOneText, litteIconTwo, litteIconTwoText, btmIconOne, topLeftText, topLeftValue, btmIconTwo, topRightText, topRightValue, btmIconThree, btmLeftText, btmLeftValue, btmIconFour, btmRightValue, btmRightText }
    }

    let moon
    if (weather.moon_phase === 1 || weather.moon_phase === 0) moon = 'New Moon'
    if (weather.moon_phase > 0 && weather.moon_phase < 0.25) moon = 'Waxing Crescent'
    if (weather.moon_phase === 0.25) moon = 'First Quarter Moon'
    if (weather.moon_phase > 0.25 && weather.moon_phase < 0.50) moon = 'Waxing Gibous'
    if (weather.moon_phase === 0.5) moon = 'Full Moon'
    if (weather.moon_phase > .50 && weather.moon_phase < 0.75) moon = 'Waning Gibous'
    if (weather.moon_phase === 0.75) moon = 'Last Quarter Moon'
    if (weather.moon_phase > .75 && weather.moon_phase < 1) moon = 'Waning Crescent'

    const cellData = [
        createCellData(`${dayTime} | Day`, `${Math.trunc(weather.temp.day)}`, weather.weather[0].icon, faTint, weather.pop, faWind, weather.wind_speed, faTint, 'Humidity', weather.humidity, faSun, 'UV Index', `${Math.trunc(weather.uvi)} of 10`, faArrowUp, 'Sunrise', sunRise, faArrowDown, 'SunSet', sunSet),
        createCellData(`${dayTime} | Night`, `${Math.trunc(weather.temp.night)}`, weather.weather[0].icon, faTint, weather.pop, faWind, weather.wind_speed, faCloud, 'Clouds', `${Math.trunc(weather.clouds)}%`, faCloudMoon, 'Moon Phase', moon, faArrowUp, 'Moonrise', moonRise, faArrowDown, 'Moonset', moonSet)
    ]

    return (
        <TableBody>

            <TableRow key={weather.dt}>
                {cellData.map((item, i) => {
                    return (
                        <TableCell align="center" padding='none' style={{ border: 'none' }} classes={{ root: classes.tableCell }} key={`${i}-hour-tc`}>
                            <div className={classes.expandCol}>
                                <div className={classes.header}>
                                    <div className={classes.title}>
                                        <div className={classes.date}>
                                            {item.date}
                                        </div>
                                        <div className={classes.openIcon}>
                                            {i === 1 ?
                                                <IconButton aria-label="expand row" size="small" onClick={() => openRow()}>
                                                    <KeyboardArrowUpIcon />
                                                </IconButton>
                                                : null}
                                        </div>
                                    </div>
                                    <div className={classes.headerIcons}>
                                        <div className={classes.temp}>{item.temp}</div>
                                        <div className={classes.weatherIcon}><img src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`} alt='forecastIcon' /></div>
                                        <div className={classes.littleIcons}>
                                            <div className={classes.iconOne}><FontAwesomeIcon icon={item.litteIconOne} size="1x" /> {`${Math.ceil(item.litteIconOneText)} % `}</div>
                                            <div className={classes.faicon}><FontAwesomeIcon icon={item.litteIconTwo} size="1x" /> {`${Math.ceil(item.litteIconTwoText)} ${unit === 'imperial' ? "mph " : "mps"}`} </div>
                                        </div>
                                    </div>
                                    <div className={classes.bottomContent}>
                                        <div className={classes.bottomCard}>
                                            <Card>
                                                <CardContent>
                                                    <div className={classes.bottomContent}>
                                                        <div className={classes.LeftRight}>
                                                            <div className={classes.iconOne}><FontAwesomeIcon icon={item.btmIconOne} size="1x" /></div>
                                                            <div>
                                                                <span className={classes.iconTitle}>{item.topLeftText}</span>
                                                                <span className={classes.iconValue}>{item.topLeftValue}</span>
                                                            </div>
                                                        </div>
                                                        <div className={classes.LeftRight}>
                                                            <div className={classes.iconOne}><FontAwesomeIcon icon={item.btmIconTwo} size="1x" /></div>
                                                            <div>
                                                                <span className={classes.iconTitle}>{item.topRightText}</span>
                                                                <span className={classes.iconValue}>{item.topRightValue}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Divider />
                                                    <div className={classes.bottomContent}>
                                                        <div className={classes.LeftRight}>
                                                            <div className={classes.iconOne}><FontAwesomeIcon icon={item.btmIconThree} size="1x" /></div>
                                                            <div>
                                                                <span className={classes.iconTitle}>{item.btmLeftText}</span>
                                                                <span className={classes.iconTitle}>{item.btmLeftValue}</span>
                                                            </div>
                                                        </div>
                                                        <div className={classes.LeftRight}>
                                                            <div className={classes.iconOne}><FontAwesomeIcon icon={item.btmIconFour} size="1x" /></div>
                                                            <div>
                                                                <span className={classes.iconTitle}>{item.btmRightValue}</span>
                                                                <span className={classes.iconValue}>{item.btmRightText}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TableCell>
                    )
                })}
            </TableRow>
        </TableBody >
    );
}

export default DailyInnerTable;