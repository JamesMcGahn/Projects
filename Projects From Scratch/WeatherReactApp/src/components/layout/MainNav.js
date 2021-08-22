import React from 'react';
import Navbar from '../nav/Navbar'
import HistoryBar from '../nav/HistoryBar'
import ForecastTypeBar from '../nav/ForecastTypeBar'

function MainNav(props) {
    const { unit, setUnit, setSearchResultLoc, weather, id, setTypeTabIndex, typeTabIndex, removeLocation, idChange } = props
    return (
        <>
            <Navbar unit={unit} setUnit={setUnit} setSearchResultLoc={setSearchResultLoc} />
            <HistoryBar weather={weather} removeLocation={removeLocation} idChange={idChange} />
            <ForecastTypeBar id={id} setTypeTabIndex={setTypeTabIndex} typeTabIndex={typeTabIndex} />
        </>
    );
}

export default MainNav;