import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import HourlyWeatherTable from '../components/forecastCards/HourlyWeatherTable';

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem',
        flexDirection: 'column',
    },

});


function HourlyForecastPage({ weather }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <HourlyWeatherTable weather={weather} />
        </div>
    );
}

export default HourlyForecastPage;