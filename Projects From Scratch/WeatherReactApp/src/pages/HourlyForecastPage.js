import React from 'react';
import WeatherTable from '../components/tables/WeatherTable';
import Page from '../components/layout/Page'



function HourlyForecastPage({ id, idChange, changeTab, findLocation }) {
    const forecast = findLocation(id)
    return (
        <Page id={id} idChange={idChange} changeTab={changeTab} tab={1} findLocation={findLocation}>
            {forecast.map(weather => <WeatherTable tableData={weather.hourly}
                forecastTime={weather.current.dt} timeZoneOffset={weather.timezone_offset}
                tableTitle={'Hourly Weather'} city={weather.city}
                unit={weather.unit} hourly={true}
            />)}
        </Page>
    );
}

export default HourlyForecastPage;