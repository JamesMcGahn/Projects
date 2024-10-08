import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { useStyles } from '../../styles/cards/todayWeatherDetailStyles';
import Card from '@material-ui/core/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faThermometerThreeQuarters, faTint, faWind, faSun, faEye, faArrowsAltV,
    faHandHoldingWater, faCloud, faCloudRain, faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons'




function TodayWeatherDetail(props) {
    const classes = useStyles();
    const { weather } = props;
    const { unit, current, city, daily, minutely } = weather

    function createRowData(name, icon, value) {
        return { name, icon, value };
    }

    let visibility = unit === 'imperial' ? `${Math.trunc(current.visibility * 3.281)} ft` : `${current.visibility} m`;
    let tempUnits = unit === 'imperial' ? `° F` : `° C`
    let speedUnit = unit === 'imperial' ? 'mph' : 'mps'
    const leftRows = [
        createRowData('High / Low', faThermometerThreeQuarters, `${Math.trunc(daily[0].temp.max)} ${tempUnits} / ${Math.trunc(daily[0].temp.min)} ${tempUnits} `,),
        createRowData('Humidity', faTint, `${current.humidity} %`),
        createRowData('Wind Speed', faWind, `${current.wind_speed} ${speedUnit}`),
        createRowData('UV Index', faSun, `${current.uvi} / 10`, 67,),
        createRowData('Visibility', faEye, visibility, 49,),
    ];
    const rightRows = [
        createRowData('Pressure', faArrowsAltV, `${current.pressure} hPa`),
        createRowData('Dew Point', faHandHoldingWater, `${current.dew_point} ${tempUnits}`),
        createRowData('Cloudiness', faCloud, `${current.clouds} %`),
        createRowData('Wind Gust', faTachometerAlt, `${current.wind_gust} ${speedUnit}`, 67,),
        createRowData('Precipitation volume', faCloudRain, ` ${minutely ? minutely[0].precipitation : '0'}  mm`),
    ];

    return (
        <Card className={classes.root}>
            <div className={classes.header}>
                <div> <h3>Weather Today in {city}</h3></div>
                <div className={classes.content}>
                    <div className={classes.temp}>
                        <span className={classes.feels}>{Math.trunc(current.feels_like)}°</span>
                        <span className={classes.feelsText}>Feels Like</span>
                    </div>
                    <div className={classes.sun}>
                    </div>
                </div>
            </div>
            <div className={classes.tableCont}>
                <div className={classes.left}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                            {leftRows.map((row, i) => (
                                <TableRow key={row.name}>
                                    <TableCell align="left" style={i === rightRows.length - 1 ? { borderBottomColor: 'white' } : null}>
                                        <span className={classes.icon}><FontAwesomeIcon icon={row.icon} size="1x" /></span>  {row.name}</TableCell>
                                    <TableCell align="right" style={i === rightRows.length - 1 ? { borderBottomColor: 'white' } : null}>
                                        <span className={classes.value}>{row.value}</span></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </div>
                <div className={classes.right}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                            {rightRows.map((row, i) => (
                                <TableRow key={row.name} >
                                    <TableCell align="left" style={i === rightRows.length - 1 ? { borderBottomColor: 'white' } : null}><span className={classes.icon}><FontAwesomeIcon icon={row.icon} size="1x" /></span> {row.name}</TableCell>
                                    <TableCell align="right" style={i === rightRows.length - 1 ? { borderBottomColor: 'white' } : null}><span className={classes.value}>{row.value}</span></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>



        </Card>
    );
}


export default TodayWeatherDetail;