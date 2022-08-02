import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faTint, faThermometerThreeQuarters, faSun } from '@fortawesome/free-solid-svg-icons'
import TableBody from '@material-ui/core/TableBody';
import { useStyles } from '../../styles/tables/hourlyInnerTableStyles'


function HourlyInnerTable({ weather, unit }) {
    const classes = useStyles();

    function createCellData(icon, text, value) {
        return { icon, text, value }
    }

    const cellData = [
        createCellData(faThermometerThreeQuarters, "Feels Like", `${Math.ceil(weather.feels_like)} ${unit === 'imperial' ? "°F " : "°C"}`),
        createCellData(faTint, 'Wind', `${Math.ceil(weather.wind_speed)} ${unit === 'imperial' ? "mph " : "mps"}`),
        createCellData(faWind, 'Humidity', `${weather.humidity}%`),
        createCellData(faSun, 'UV Index', `${weather.uvi} of 10`),
    ]

    return (
        <TableBody >
            <TableRow key={`${weather.dt}-hour-tc-${weather.id}`} classes={{ root: classes.tableRow }}>
                {cellData.map((item, i) => {
                    return (
                        <TableCell align="center" padding='none' classes={{ root: classes.tableCell }} key={`${i}-hour-tc-${weather.id}`}>
                            <div className={classes.expandCol}>
                                <div className={classes.faicon}><FontAwesomeIcon icon={item.icon} size="2x" /></div>
                                <div className={classes.fatext}>
                                    <span >{item.text}</span>
                                    <span className={classes.favalue}>{item.value}</span>
                                </div>
                            </div>
                        </TableCell>
                    )
                })}

            </TableRow>
        </TableBody>
    );
}

export default HourlyInnerTable;