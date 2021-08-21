import './App.css';
import React, { useEffect } from 'react';
import TodayForecastPage from './pages/TodayForecastPage';
import MainNav from './components/layout/MainNav'
import HourlyForecastPage from './pages/HourlyForecastPage';
import DailyForecastPage from './pages/DailyForecastPage';
import { OW_API_KEY } from './keys.js'
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
  const [city, setCity] = React.useState();
  const [unit, setUnit] = React.useState('imperial')
  const [typeTabIndex, setTypeTabIndex] = React.useState(0);
  const [weatherData, setweatherData] = uselocalStoreHook()
  const [searchText, setSearchText] = React.useState('')
  const [selectedLocation, setSelectedLocation] = React.useState();


  const findLocation = (id, setTab) => {
    let passedId = id
    if (!passedId) {
      if (selectedLocation) passedId = selectedLocation;
      else if (weatherData.length > 0) passedId = weatherData[weatherData.length - 1].id;
      else return null
    }
    const locData = weatherData.filter(loc => (loc.id === id))
    setTypeTabIndex(setTab) //TODO bad state call need to pull out in own handler, pass to history item
    return locData;
  }

  const idChange = (id) => {
    setSelectedLocation(id)
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

  const coordsFetch = async () => {
    try {
      if (searchText.length === 0) {
        throw new Error('No search text')
      } else {
        const res = await axios.get(`https://geocode.xyz/${searchText}?json=1`)
        const { data } = res
        console.log(data)
        setCity(data.standard.city)
        setCoords({ latt: data.latt, longt: data.longt })
      }
    }
    catch (e) {
      console.log('coords', e)
    }
  }

  const weatherFetch = async () => {
    try {
      if (coords === '' || city === '') throw new Error('No coords')
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latt}&lon=${coords.longt}&units=${unit}&appid=${OW_API_KEY}`);
      const { data } = response
      console.log(data)
      const newData = { ...data, id: uuid(), city: city, unit: unit }
      setSelectedLocation(newData.id)
      checkData(newData)
      setCity('')

    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    weatherFetch()
  }, [coords])

  useEffect(() => {
    coordsFetch()
  }, [searchText])






  const classes = useStyles();
  return (
    <div className={classes.root}>

      <MainNav unit={unit} setUnit={setUnit} setSearchText={setSearchText} weather={weatherData}
        id={selectedLocation} setTypeTabIndex={setTypeTabIndex} typeTabIndex={typeTabIndex} removeLocation={removeLocation} idChange={idChange}
      />

      <Route render={({ location }) =>
        <Switch location={location}>
          <Route exact path='/daily/:locId' render={routeProps => (
            <DailyForecastPage weather={findLocation(routeProps.match.params.locId, 2)} />
          )} />
          <Route exact path='/hourly/:locId' render={routeProps => (
            <HourlyForecastPage weather={findLocation(routeProps.match.params.locId, 1)} />
          )} />
          <Route exact path='/today/:locId' render={routeProps => (
            <TodayForecastPage weather={weatherData} findLocation={findLocation} id={routeProps.match.params.locId} />
          )} />

          <Route path='/' render={(routeProps) => (
            <>
              {
                selectedLocation ?
                  <Redirect to={`/today/${selectedLocation}`} />
                  :
                  <h1></h1>
              }
            </>
          )} />
        </Switch>
      } />
    </div>
  );
}

export default App;
