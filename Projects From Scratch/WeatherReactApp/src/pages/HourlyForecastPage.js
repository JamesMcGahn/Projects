import React from 'react';
import WeatherTable from '../components/tables/WeatherTable';
import Page from '../components/layout/Page'



function HourlyForecastPage({ id, idChange, changeTab, findLocation }) {
    const forecast = findLocation(id)
    return (
        <Page id={id} idChange={idChange} changeTab={changeTab} tab={1} findLocation={findLocation}>
            <WeatherTable tableData={forecast[0].hourly}
                forecastTime={forecast[0].current.dt} timeZoneOffset={forecast[0].timezone_offset}
                tableTitle={'Hourly Weather'} city={forecast[0].city}
                unit={forecast[0].unit} hourly={true} id={id} key={id} state={forecast[0].state} country={forecast[0].country}
            />
        </Page>
    );
}

export default HourlyForecastPage;