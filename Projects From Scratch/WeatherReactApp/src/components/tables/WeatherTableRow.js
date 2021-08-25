import React, { useEffect } from 'react';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import DailyInnerTable from './DailyInnerTable'
import HourlyInnerTable from './HourlyInnerTable';
import { useStyles } from '../../styles/tables/weatherTableRowStyles'

function WeatherTableRow({ weather, unit, localHourTime, hourly, index, timeZoneOffset, timezone }) {

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
    }, [index])

    const openRow = () => {
        setOpen(!open)
    }


    return (
        <>
            <TableRow className={classes.root}>

                <TableCell align="left" size='medium' padding="checkbox" classes={{ paddingCheckbox: classes.checkCell }} >{hourly ? hourlyTime : dayTime}</TableCell>
                <TableCell align="center" size='small' padding='normal'>{temp}</TableCell>
                <TableCell align="right" padding='checkbox'><img className={classes.icon} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={'ss'} /></TableCell>
                <TableCell align="left" padding='none' classes={{ paddingNone: classes.wind }} >{description}</TableCell>
                <TableCell align="center"> <FontAwesomeIcon icon={faWind} size="lg" />  {`${Math.ceil(weather.wind_speed)} ${unit === 'imperial' ? "mph " : "mps"}`}</TableCell>
                <TableCell size='small' classes={{ sizeSmall: classes.smallCell }}>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>

                        <Table size="small" aria-label="more-info">

                            {hourly ?
                                <HourlyInnerTable unit={unit} weather={weather} />
                                :
                                <DailyInnerTable unit={unit} weather={weather} openRow={openRow} open={open} dayTime={dayTime} timezone={timezone} />
                            }

                        </Table>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default WeatherTableRow;