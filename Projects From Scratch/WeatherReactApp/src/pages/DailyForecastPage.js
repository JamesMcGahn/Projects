import React from 'react';
import WeatherTable from '../components/tables/WeatherTable';
import Page from '../components/layout/Page'

function DailyForecastPage({ id, idChange, changeTab, findLocation }) {
    const forecast = findLocation(id)
    return (
        <Page id={id} idChange={idChange} changeTab={changeTab} tab={2} findLocation={findLocation}>
            {
                forecast.map(weather =>
                    <WeatherTable tableData={weather.daily} key={id}
                        forecastTime={weather.current.dt} timeZoneOffset={weather.timezone_offset}
                        tableTitle={'7 Day Weather'} city={weather.city}
                        unit={weather.unit} hourly={false} timezone={weather.timezone} id={id}
                    />
                )}
        </Page>
    );
}

export default DailyForecastPage;