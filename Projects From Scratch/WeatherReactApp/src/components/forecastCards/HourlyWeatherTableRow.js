import React from 'react';
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

const useStyles = makeStyles({
    root: {

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

function HourlyWeatherTableRow({ weather, unit }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const convertTime = new Date(weather.dt * 1000).toLocaleTimeString('en-US', { timeStyle: 'short' })
    const icon = weather.weather[0].icon
    const description = weather.weather[0].description.replace(/\b\w/g, l => l.toUpperCase())
    return (
        <>
            <TableRow className={classes.root}>

                <TableCell align="left" size='medium' padding="checkbox" classes={{ paddingCheckbox: classes.checkCell }} >{convertTime}</TableCell>
                <TableCell align="left" size='small' padding='normal'>{`${Math.ceil(weather.temp)}${unit === 'imperial' ? "° F " : "° C"}`}</TableCell>
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
                                    <TableCell align="center" padding='none' classes={{ root: classes.tableCell }}>
                                        <div className={classes.expandCol}>
                                            <div className={classes.faicon}><FontAwesomeIcon icon={faThermometerThreeQuarters} size="2x" /></div>
                                            <div className={classes.fatext}>
                                                <span >Feels Like</span>
                                                <span className={classes.favalue}>{`${Math.ceil(weather.feels_like)} ${unit === 'imperial' ? "°F " : "°C"}`}</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell align="center" padding='none' classes={{ root: classes.tableCell }}>
                                        <div className={classes.expandCol}>
                                            <div className={classes.faicon}><FontAwesomeIcon icon={faTint} size="2x" /></div>
                                            <div className={classes.fatext}>
                                                <span >Wind</span>
                                                <span className={classes.favalue}>{`${Math.ceil(weather.wind_speed)} ${unit === 'imperial' ? "mph " : "mps"}`}</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell align="center" padding='none' classes={{ root: classes.tableCell }}>
                                        <div className={classes.expandCol}>
                                            <div className={classes.faicon}><FontAwesomeIcon icon={faWind} size="2x" /></div>
                                            <div className={classes.fatext}>
                                                <span >Humidity</span>
                                                <span className={classes.favalue}>{weather.humidity}%</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell align="center" padding='none' classes={{ root: classes.tableCell }}>
                                        <div className={classes.expandCol}>
                                            <div className={classes.faicon}><FontAwesomeIcon icon={faSun} size="2x" /></div>
                                            <div className={classes.fatext}>
                                                <span >UV Index</span>
                                                <span className={classes.favalue}>{weather.uvi} of 10</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default HourlyWeatherTableRow;