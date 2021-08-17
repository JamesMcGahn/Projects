import React from 'react';
import Navbar from '../nav/Navbar'
import HistoryBar from '../nav/HistoryBar'
import ForecastTypeBar from '../nav/ForecastTypeBar'

function MainNav(props) {
    const { unit, setUnit, setSearchText, weather, id, setTypeTabIndex, typeTabIndex } = props
    return (
        <>
            <Navbar unit={unit} setUnit={setUnit} setSearchText={setSearchText} />
            <HistoryBar weather={weather} />
            <ForecastTypeBar id={id} setTypeTabIndex={setTypeTabIndex} typeTabIndex={typeTabIndex} />
        </>
    );
}

export default MainNav;