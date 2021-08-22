import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import WeatherTableRow from './WeatherTableRow'
import { TableRow } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    banner: {
        border: 'none',
        lineHeight: 0,
        padding: '.3rem'
    },
    paper: {
        width: '100%',
        marginTop: 0,
        marginBottom: '2rem',
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    container: {
        width: '65%'
    },
    headTitle: {
        width: '100%',
        padding: '10px 0 0 15px ',
        "& h2": {
            margin: 0,
            display: 'inline-block',
        },
        "& h3": {
            display: 'inline-block',
            fontWeight: 400,
            fontSize: '1.1rem',
            margin: 0,
        },
        "& h4": {
            marginTop: '.5rem',
            color: 'grey',
            fontWeight: 400,
            fontSize: '1rem'
        }
    },
    tableContainer: {
        padding: '0 1rem 0 1rem',
        margin: 0
    }
}));

function WeatherTable({ hourly, tableData, forecastTime, timeZoneOffset, tableTitle, city, unit, timezone }) {
    const classes = useStyles();
    const localTime = (forecastTime + timeZoneOffset)
    const currentTime = new Date(localTime * 1000).getDay()
    const time = new Date(localTime * 1000).toLocaleTimeString('en-US', { timeStyle: 'short' })
    return (
        <div className={classes.container} key={localTime}>
            <Paper className={classes.paper}>
                <Box margin={0} boxShadow={0} p={1} >
                    <div className={classes.headTitle}>
                        <div><span><h2>{tableTitle}</h2> <h3> - {city}</h3> </span></div>
                        <div><h4>As of {time}</h4></div>
                    </div>
                </Box>
                <TableContainer component={Paper} classes={{ root: classes.tableContainer }}>
                    <Table aria-label="hourly forecast table" key={`${tableTitle}-${time}`}>
                        <TableBody>
                            {tableData.map((weather, i) => {
                                const timeLocal = (weather.dt + timeZoneOffset)
                                const listItemDay = new Date(timeLocal * 1000).getDay()
                                const listItemHour = new Date(timeLocal * 1000).getHours()
                                const bannerTime = new Date(timeLocal * 1000).toLocaleDateString('en-Us', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
                                if (hourly && ((currentTime < listItemDay && listItemHour === 0) || i === 0)) {
                                    return <>
                                        <TableRow key={bannerTime}>
                                            <TableCell align="left" colSpan={6} classes={{ root: classes.banner }} >
                                                <h3> {bannerTime}</h3>
                                            </TableCell>
                                        </TableRow>
                                        <WeatherTableRow key={`${i}-brow-${listItemHour}`} weather={weather} unit={unit} localHourTime={timeLocal} hourly={hourly} />
                                    </>
                                } else {
                                    return <WeatherTableRow key={`${i}-Rrow-${listItemHour}`} weather={weather} unit={unit} localHourTime={timeLocal} hourly={hourly} index={i} timezone={timezone} />
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