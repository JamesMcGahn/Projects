import React from 'react';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import WeatherTableRow from './WeatherTableRow'
import { TableRow } from '@material-ui/core';
import { useStyles } from '../../styles/tables/weatherTableStyles'


function WeatherTable({ hourly, tableData, forecastTime, timeZoneOffset, tableTitle, city, unit, timezone, id }) {
    const classes = useStyles();
    const localTime = (forecastTime + timeZoneOffset)
    const currentTime = new Date(localTime * 1000).getDay()
    const time = new Date(localTime * 1000).toLocaleTimeString('en-US', { timeStyle: 'short' })

    return (
        <div className={classes.container} key={`${id}-Table-Div`}>
            <Paper className={classes.paper}>
                <Box margin={0} boxShadow={0} p={1} >
                    <div className={classes.headTitle}>
                        <div><span><h2>{tableTitle}</h2> <h3> - {city}</h3> </span></div>
                        <div><h4>As of {time}</h4></div>
                    </div>
                </Box>
                <TableContainer component={Paper} classes={{ root: classes.tableContainer }}>
                    <Table aria-label="hourly forecast table" >
                        <TableBody key={`Table-${tableTitle}-${time}-${id}`}>
                            {tableData.map((weather, i) => {
                                const timeLocal = (weather.dt + timeZoneOffset)
                                const listItemDay = new Date(timeLocal * 1000).getDay()
                                const listItemHour = new Date(timeLocal * 1000).getHours()
                                const bannerTime = new Date(timeLocal * 1000).toLocaleDateString('en-Us', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
                                if (hourly && ((currentTime < listItemDay && listItemHour === 0) || i === 0)) {
                                    return <React.Fragment key={`header-row-${i}-${tableTitle}`}>
                                        <TableRow key={bannerTime}>
                                            <TableCell align="left" colSpan={6} classes={{ root: classes.banner }} >
                                                <h3> {bannerTime}</h3>
                                            </TableCell>
                                        </TableRow>
                                        <WeatherTableRow key={`${i}-brow-${tableTitle}-${city}`} weather={weather} unit={unit} localHourTime={timeLocal} hourly={hourly} />
                                    </React.Fragment>
                                } else {
                                    return <WeatherTableRow key={`${i}-Rrow-${tableTitle}-${city}`} weather={weather} unit={unit} localHourTime={timeLocal} hourly={hourly} index={i} timezone={timezone} />
                                }
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper >

        </div >
    );
}

export default WeatherTable;