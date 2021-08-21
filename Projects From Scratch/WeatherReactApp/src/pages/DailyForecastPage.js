import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import WeatherTable from '../components/tables/WeatherTable';

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


function DailyForecastPage({ weather }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <WeatherTable tableData={weather[0].daily}
                forecastTime={weather[0].current.dt} timeZoneOffset={weather[0].timezone_offset}
                tableTitle={'7 Day Weather'} city={weather[0].city}
                unit={weather[0].unit} hourly={false} timezone={weather[0].timezone}
            />

        </div>
    );
}

export default DailyForecastPage;