import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faTint, faThermometerThreeQuarters, faSun } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';

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

    console.log(cellData)

    return (
        <TableBody >
            <TableRow key={weather.dt}>
                {cellData.map((item, i) => {
                    return (
                        <TableCell align="center" padding='none' classes={{ root: classes.tableCell }} key={`${i}-hour-tc`}>
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