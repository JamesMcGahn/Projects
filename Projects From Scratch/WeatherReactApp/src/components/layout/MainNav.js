import React from 'react';
import Navbar from '../nav/Navbar'
import HistoryBar from '../nav/HistoryBar'
import ForecastTypeBar from '../nav/ForecastTypeBar'

function MainNav(props) {
    const { unit, setUnit, setSearchText, weather, id, setTypeTabIndex, typeTabIndex, removeLocation } = props
    return (
        <>
            <Navbar unit={unit} setUnit={setUnit} setSearchText={setSearchText} />
            <HistoryBar weather={weather} removeLocation={removeLocation} />
            <ForecastTypeBar id={id} setTypeTabIndex={setTypeTabIndex} typeTabIndex={typeTabIndex} />
        </>
    );
}

export default MainNav;