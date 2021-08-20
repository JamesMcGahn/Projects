import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TodayWeatherSummary from '../components/forecastCards/TodayWeatherSummary.js';
import TodayWeatherDaySummary from '../components/forecastCards/TodayWeatherDaySummary'
import TodayWeatherDetail from '../components/forecastCards/TodayWeatherDetail'

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '15px'
    },
    todaysum: {
        width: '60%',
        marginBottom: '1rem'
    },
    todayday: {
        width: '60%',
        marginBottom: '1rem'
    }
});


function TodayForecastPage(props) {
    const { weather } = props
    const forecast = weather === 'undefined' ? false : weather[0]
    const classes = useStyles()
    return (
        <>
            {!forecast ? <h1>loading</h1> :
                <div className={classes.root}>
                    <div className={classes.todaysum}>
                        <TodayWeatherSummary city={forecast.city} time={forecast.current.dt + forecast.timezone_offset} temp={forecast.current.temp}
                            description={forecast.current.weather[0].description} unit={forecast.unit}
                            icon={`http://openweathermap.org/img/wn/${forecast.current.weather[0].icon}@2x.png`}
                            min={forecast.daily[0].temp.min} max={forecast.daily[0].temp.max} rainChance={forecast.daily[0].pop}
                            alert={forecast.hasOwnProperty('alerts') ? forecast.alerts[0] : false}
                            id={forecast.id}
                        />
                    </div>
                    <div className={classes.todayday}>
                        <TodayWeatherDaySummary weather={weather} />
                    </div>
                    <div>
                        <TodayWeatherDetail weather={weather} />
                    </div>


                </ div>
            }
        </>
    );
}

export default TodayForecastPage;