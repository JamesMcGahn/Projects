import './App.css';
import React, { useEffect } from 'react';

import Layout from './components/layout/Layout'
import TodayForecastPage from './pages/TodayForecastPage';
import HourlyForecastPage from './pages/HourlyForecastPage';
import DailyForecastPage from './pages/DailyForecastPage';
import WeekendForecastPage from './pages/WeekendForecastPage';
import RadarForecastPage from './pages/RadarForecastPage';
import AlertsPage from './pages/AlertsPage';
import AirQualityPage from './pages/AirQualityPage';
import { OW_API_KEY, AW_API_KEY } from './keys.js'
import { Switch, Route, Redirect } from 'react-router-dom'
import { uuid } from 'uuidv4';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import uselocalStoreHook from './hooks/useLocalStoreHook'




function App(props) {
  const [unit, setUnit] = React.useState('imperial')
  const [typeTabIndex, setTypeTabIndex] = React.useState(0);
  const [weatherData, setweatherData] = uselocalStoreHook()
  const [SearchResultLoc, setSearchResultLoc] = React.useState()
  const [selectedLocation, setSelectedLocation] = React.useState();

  let history = useHistory()

  const findLocation = (id, setTab) => {
    let passedId = id
    if (!passedId) {
      if (selectedLocation) passedId = selectedLocation;
      else if (weatherData.length > 0) passedId = weatherData[weatherData.length - 1].id;
      else return null
    }
    const locData = weatherData.filter(loc => (loc.id === id))
    return locData
  }

  const idChange = (id) => {
    setSelectedLocation(id)
  }

  const changeTab = (tab) => {
    setTypeTabIndex(tab)
  }

  const removeLocation = (id) => {
    const removed = weatherData.filter(loc => (loc.id !== id))
    setweatherData(removed)
  }

  const checkData = (newData) => {
    const cleanedData = weatherData.filter(locations => {
      return locations.lat !== newData.lat && locations.lon !== newData.lon
    })
    setweatherData([...cleanedData, newData])
  }



  const weatherFetch = async () => {
    try {
      if (SearchResultLoc) {
        const { lat, lon, name, country } = SearchResultLoc
        let state
        if (SearchResultLoc.state) state = SearchResultLoc.state
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&appid=${OW_API_KEY}`);
        const { data } = response
        const newData = {
          ...data, id: uuid(), city: name, unit: unit, country: country, state: state ? state : null,
          air: await axios.get(`https://api.weatherbit.io/v2.0/current/airquality?lat=${lat}&lon=${lon}&key=${AW_API_KEY}`)
            .then(res => {
              return res.data.data[0] ? res.data.data[0] : null
            })
        }
        setSelectedLocation(newData.id)
        checkData(newData)
        setSearchResultLoc()
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    weatherFetch()
  }, [SearchResultLoc])

  useEffect(() => {
    if (weatherData.findIndex(loc => loc.id === selectedLocation) !== -1) {
      history.push(`/today/${selectedLocation}`)
    }
    else if (weatherData.length > 0) {
      let id = weatherData[weatherData.length - 1].id
      history.push(`/today/${id}`)
    } else {
      history.push(`/`)
    }

  }, [weatherData])


  return (
    <Layout unit={unit} setUnit={setUnit} setSearchResultLoc={setSearchResultLoc} weather={weatherData}
      id={selectedLocation} setTypeTabIndex={setTypeTabIndex} typeTabIndex={typeTabIndex} removeLocation={removeLocation} idChange={idChange}
    >
      <Route render={({ location }) =>
        <Switch location={location}>
          <Route exact path='/welcome/' render={routeProps => (
            <h1>select a location</h1>
          )} />
          <Route exact path='/alerts/:locId' render={routeProps => (
            <AlertsPage findLocation={findLocation} changeTab={changeTab} idChange={idChange} id={routeProps.match.params.locId} />
          )} />
          <Route exact path='/airquality/:locId' render={routeProps => (
            <AirQualityPage findLocation={findLocation} changeTab={changeTab} idChange={idChange} id={routeProps.match.params.locId} />
          )} />
          <Route exact path='/radar/:locId' render={routeProps => (
            <RadarForecastPage findLocation={findLocation} changeTab={changeTab} idChange={idChange} id={routeProps.match.params.locId} />
          )} />
          <Route exact path='/daily/:locId' render={routeProps => (
            <DailyForecastPage findLocation={findLocation} changeTab={changeTab} idChange={idChange} id={routeProps.match.params.locId} />
          )} />
          <Route exact path='/hourly/:locId' render={routeProps => (
            <HourlyForecastPage findLocation={findLocation} changeTab={changeTab} idChange={idChange} id={routeProps.match.params.locId} />
          )} />
          <Route exact path='/weekend/:locId' render={routeProps => (
            <WeekendForecastPage findLocation={findLocation} changeTab={changeTab} idChange={idChange} id={routeProps.match.params.locId} />
          )} />
          <Route exact path='/today/:locId' render={routeProps => (
            <TodayForecastPage findLocation={findLocation} changeTab={changeTab} idChange={idChange} id={routeProps.match.params.locId} />
          )} />

          <Route path='/' render={(routeProps) => (
            <>
              {
                selectedLocation ?
                  <Redirect to={`/today/${selectedLocation}`} />
                  :
                  weatherData.length > 0 ? <Redirect to={`/today/${weatherData[weatherData.length - 1].id}`} />
                    :
                    <Redirect to={`/welcome`} />
              }
            </>
          )} />
          <Route path='*' render={(routeProps) => (
            <Redirect to={`/welcome`} />
          )} />

        </Switch>
      } />
    </Layout>
  );
}

export default App;
