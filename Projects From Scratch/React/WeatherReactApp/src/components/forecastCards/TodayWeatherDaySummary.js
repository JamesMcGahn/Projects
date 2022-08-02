import React from 'react';
import SummaryCard from '../ui/SummaryCard'


function TodayWeatherDaySummary({ weather }) {
    const { city, unit, id } = weather
    const { day, eve, morn, night } = weather.daily[0].feels_like


    function createCardData(title, value) {
        return { title, value };
    }

    const cardData = [
        createCardData('Morning', `${Math.ceil(morn)}`),
        createCardData('Afternoon', `${Math.ceil(day)}`),
        createCardData('Evening', `${Math.ceil(night)}`),
        createCardData('Overnight', `${Math.ceil(eve)}`),
    ];
    return (
        <SummaryCard cardTitle={`Today's Forecast for ${city}`}
            cardData={cardData} unit={unit} route={`/daily/${id}`}
            buttonColor={'#1b4de4'} buttonText={'Next Hours'} mobileWidth={2} mobileTextAlign="center"
        />
    );
}

export default TodayWeatherDaySummary;