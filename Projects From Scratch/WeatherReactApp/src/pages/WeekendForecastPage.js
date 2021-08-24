import React from 'react';
import WeatherTable from '../components/tables/WeatherTable';
import Page from '../components/layout/Page'

function DailyForecastPage({ id, idChange, changeTab, findLocation }) {
    const forecast = findLocation(id)
    return (
        <Page id={id} idChange={idChange} changeTab={changeTab} tab={3} findLocation={findLocation}>
            {
                forecast.map(weather => {
                    const weekendData = weather.daily.filter(day => {
                        const timeLocal = (day.dt + weather.timezone_offset)
                        const listItemDay = new Date(timeLocal * 1000).getDay()
                        if (listItemDay === 5 || listItemDay === 6 || listItemDay === 7) {
                            return day
                        }
                        return null
                    }
                    )
                    return (
                        <WeatherTable tableData={weekendData} key={weather.city}
                            forecastTime={weather.current.dt} timeZoneOffset={weather.timezone_offset}
                            tableTitle={'Weekend Weather'} city={weather.city}
                            unit={weather.unit} hourly={false} timezone={weather.timezone}
                        />
                    )
                }
                )}
        </Page>
    );
}

export default DailyForecastPage;