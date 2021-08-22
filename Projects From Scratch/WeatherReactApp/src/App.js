import './App.css';
import React, { useEffect } from 'react';
import TodayForecastPage from './pages/TodayForecastPage';
import MainNav from './components/layout/MainNav'
import HourlyForecastPage from './pages/HourlyForecastPage';
import DailyForecastPage from './pages/DailyForecastPage';
import WeekendForecastPage from './pages/WeekendForecastPage';
import RadarForecastPage from './pages/RadarForecastPage';
import AlertsPage from './pages/AlertsPage';
import { OW_API_KEY, AW_API_KEY } from './keys.js'
import { Switch, Route, Redirect } from 'react-router-dom'
import { uuid } from 'uuidv4';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';

import uselocalStoreHook from './hooks/useLocalStoreHook'


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1a357c",
    backgroundImage: 'linear-gradient(#1a357c 9%,#99479b)',
    height: '100%',
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  }
}));

function App(props) {
  const [coords, setCoords] = React.useState()
  const [unit, setUnit] = React.useState('imperial')
  const [typeTabIndex, setTypeTabIndex] = React.useState(0);
  const [weatherData, setweatherData] = uselocalStoreHook()
  const [SearchResultLoc, setSearchResultLoc] = React.useState()
  const [selectedLocation, setSelectedLocation] = React.useState();


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

    if (id === selectedLocation) setSelectedLocation(weatherData[weatherData.length - 1].id)
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






  const classes = useStyles();
  return (
    <div className={classes.root}>

      <MainNav unit={unit} setUnit={setUnit} setSearchResultLoc={setSearchResultLoc} weather={weatherData}
        id={selectedLocation} setTypeTabIndex={setTypeTabIndex} typeTabIndex={typeTabIndex} removeLocation={removeLocation} idChange={idChange}
      />

      <Route render={({ location }) =>
        <Switch location={location}>
          <Route exact path='/welcome/' render={routeProps => (
            <h1>select a location</h1>
          )} />
          <Route exact path='/alerts/:locId' render={routeProps => (
            <AlertsPage findLocation={findLocation} changeTab={changeTab} idChange={idChange} id={routeProps.match.params.locId} />
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
                  <Redirect to={`/welcome`} />
              }
            </>
          )} />
          <Route path='*' render={(routeProps) => (
            <Redirect to={`/welcome`} />
          )} />

        </Switch>
      } />
    </div>
  );
}

export default App;
