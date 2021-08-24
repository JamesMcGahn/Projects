import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TodayWeatherSummary from '../components/forecastCards/TodayWeatherSummary.js';
import TodayWeatherDaySummary from '../components/forecastCards/TodayWeatherDaySummary'
import TodayWeatherDetail from '../components/forecastCards/TodayWeatherDetail'
import TodayHourlyForecastSummary from '../components/forecastCards/TodayHourlyForecastSummary'
import TodayDailyForecastSummary from '../components/forecastCards/TodayDailyForecastSummary'
import Page from '../components/layout/Page'
const useStyles = makeStyles((theme) => ({
    todaysum: {
        width: '60%',
        marginTop: '1rem',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        }
    },
    summaryCard: {
        width: '60%',
        marginTop: '1rem',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        }
    },

}));

function TodayForecastPage(props) {
    const { id, findLocation, idChange, changeTab, } = props
    const forecast = findLocation(id)

    const classes = useStyles()

    return (
        <Page id={id} idChange={idChange} changeTab={changeTab} tab={0} findLocation={findLocation} >
            {forecast.map(forecast => {
                return (<React.Fragment key={`${id}-today-page`} >
                    <div className={classes.todaysum} >

                        <TodayWeatherSummary city={forecast.city} time={forecast.current.dt + forecast.timezone_offset} temp={forecast.current.temp}
                            description={forecast.current.weather[0].description} unit={forecast.unit}
                            icon={`http://openweathermap.org/img/wn/${forecast.current.weather[0].icon}@2x.png`}
                            min={forecast.daily[0].temp.min} max={forecast.daily[0].temp.max} rainChance={forecast.daily[0].pop}
                            alert={forecast.hasOwnProperty('alerts') ? forecast.alerts[0] : false}
                            id={forecast.id}
                        />
                    </div>
                    <div className={classes.summaryCard}>
                        <TodayWeatherDaySummary weather={forecast} />
                    </div>
                    <div className={classes.summaryCard}>
                        <TodayWeatherDetail weather={forecast} />
                    </div>
                    <div className={classes.summaryCard} >
                        <TodayHourlyForecastSummary weather={forecast} />
                    </div>
                    <div className={classes.summaryCard} >
                        <TodayDailyForecastSummary weather={forecast} />
                    </div>
                </React.Fragment >)
            })}
        </ Page >



    );
}

export default TodayForecastPage;