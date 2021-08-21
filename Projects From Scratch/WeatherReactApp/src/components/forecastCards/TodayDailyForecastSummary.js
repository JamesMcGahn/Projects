import React from 'react';
import SummaryCard from '../ui/SummaryCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint } from '@fortawesome/free-solid-svg-icons'
function TodayDailyForecastSummary({ weather }) {
    const { id, timezone_offset } = weather
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const firstFiveHours = weather.daily.filter((e, i) => i <= 4)
    const card = firstFiveHours.map((item) => {
        const hourlyLocal = (item.dt + timezone_offset)
        const convertTime = new Date(hourlyLocal * 1000)

        return createCardData(`${days[convertTime.getDay()]} ${convertTime.getDate()}`, `${Math.ceil(item.temp.max)}`,
            `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`, `${item.weather[0].description}`,
            <> <FontAwesomeIcon icon={faTint} size="1x" /> {Math.ceil(item.pop)} % </>, `${Math.ceil(item.temp.min)}°`)

    }
    )

    function createCardData(title, value, icon, iconText, bottomText, valueSubtext) {
        return { title, value, icon, iconText, bottomText, valueSubtext };
    }

    return (
        <SummaryCard cardTitle={`Daily Forecast`}
            cardData={card} unit={false} route={`/daily/${id}`}
            buttonColor={'#1b4de4'} buttonText={'Next 7 Days'}
            iconColor={'#1b4de4'}
        />
    );
}


export default TodayDailyForecastSummary;

