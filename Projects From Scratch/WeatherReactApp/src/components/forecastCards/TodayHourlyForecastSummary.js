import React from 'react';
import SummaryCard from '../ui/SummaryCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
function TodayHourlyForecastSummary({ weather }) {
    const { id, timezone_offset } = weather

    const firstFiveHours = weather.hourly.filter((e, i) => i <= 4)
    const card = firstFiveHours.map((item) => {
        const hourlyLocal = (item.dt + timezone_offset)
        const convertTime = new Date(hourlyLocal * 1000).toLocaleTimeString('en-US', { timeStyle: 'short' })

        return createCardData(convertTime, `${Math.ceil(item.feels_like)}`,
            `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`, `${item.weather[0].description}`,
            <> <FontAwesomeIcon icon={faCloud} size="1x" /> {item.clouds} % </>)

    }
    )

    function createCardData(title, value, icon, iconText, bottomText) {
        return { title, value, icon, iconText, bottomText };
    }

    return (
        <SummaryCard cardTitle={`Hourly Forecast`}
            cardData={card} unit={false} route={`/hourly/${id}`}
            buttonColor={'#1b4de4'} buttonText={'Next Hours'} iconColor={'#E0E0E0'}
        />
    );
}


export default TodayHourlyForecastSummary;

