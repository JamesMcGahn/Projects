import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faTint, faThermometerThreeQuarters, faSun } from '@fortawesome/free-solid-svg-icons'

import HourlyInnerTable from './HourlyInnerTable';

const useStyles = makeStyles({
    root: {
        display: props => props.open && !props.hourly ? 'none' : '',
        '& > *': {
            borderBottom: 'unset',
        },


    },
    checkCell: {
        width: '5rem',
        paddingLeft: '1rem',
    },
    icon: {
        width: '80%'
    },
    wind: {
        width: '20%',
    },
    expandCol: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        alignContent: "center",
        textAlign: "left",
    },
    faicon: {
        width: '15%',
        color: '#3f51b5',
        marginRight: '1rem',
        marginTop: "3px",

    },
    fatext: {
        width: '50%',
        marginBottom: '7px',
        "& span": {
            display: "block"
        }
    },
    favalue: {
        fontSize: '1rem',
        fontWeight: 'bold'
    },
    tableCell: {
        border: 0
    },
    maintbCell: {
        borderBottom: '1px solid rgba(224, 224, 224, 1)',

    },
    smallCell: {
        width: '1rem',
    }

});



function WeatherTableRow({ weather, unit, localHourTime, hourly, index }) {

    const [open, setOpen] = React.useState(false);
    const classes = useStyles({ open, hourly });
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const convertTime = new Date(localHourTime * 1000)
    const hourlyTime = convertTime.toLocaleTimeString('en-US', { timeStyle: 'short' })
    const dayTime = `${days[convertTime.getDay()]} ${convertTime.getDate()}`
    const weatherUnit = `${unit === 'imperial' ? "° F " : "° C"}`
    const temp = hourly
        ? `${Math.ceil(weather.temp)}${weatherUnit}`
        : <><span className={classes.max}>{Math.ceil(weather.temp.min)}°</span>/{Math.ceil(weather.temp.max)}°</>
    const icon = weather.weather[0].icon
    const description = weather.weather[0].description.replace(/\b\w/g, l => l.toUpperCase())

    useEffect(() => {
        if (!hourly && index === 0) {
            setOpen(true)
        }
    }, [])


    return (
        <>
            <TableRow className={classes.root}>

                <TableCell align="left" size='medium' padding="checkbox" classes={{ paddingCheckbox: classes.checkCell }} >{hourly ? hourlyTime : dayTime}</TableCell>
                <TableCell align="left" size='small' padding='normal'>{temp}</TableCell>
                <TableCell align="right" padding='checkbox'><img className={classes.icon} src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={'ss'} /></TableCell>
                <TableCell align="left" >{description}</TableCell>
                <TableCell align="right" padding='none' classes={{ paddingNone: classes.wind }} >{description}</TableCell>
                <TableCell align="right"> <FontAwesomeIcon icon={faWind} size="lg" />  {`${Math.ceil(weather.wind_speed)} ${unit === 'imperial' ? "mph " : "mps"}`}</TableCell>
                <TableCell size='small' classes={{ sizeSmall: classes.smallCell }}>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1} boxShadow={1} p={1}>
                            <Table size="small" aria-label="more-info">
                                <TableBody >
                                    {hourly ? <HourlyInnerTable unit={unit} weather={weather} /> : null}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default WeatherTableRow;