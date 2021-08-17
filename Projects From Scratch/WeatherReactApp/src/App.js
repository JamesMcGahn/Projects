import './App.css';
import React, { useEffect } from 'react';
import TodayForecastPage from './pages/TodayForecastPage';

import MainNav from './components/layout/MainNav'

import HourlyForecastPage from './pages/HourlyForecastPage';
import { OW_API_KEY } from './keys.js'



import { Switch, Route, Redirect } from 'react-router-dom'
import { uuid } from 'uuidv4';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1a357c",
    backgroundImage: 'linear-gradient(#1a357c 9%,#99479b)',
    height: '100%',
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat"
  }
}));

function App(props) {
  const [coords, setCoords] = React.useState('')
  const [city, setCity] = React.useState();
  const [unit, setUnit] = React.useState('imperial')
  const [typeTabIndex, setTypeTabIndex] = React.useState(0);

  const [weatherData, setweatherData] = React.useState([]);
  const [searchText, setSearchText] = React.useState('')
  const [selectedLocation, setSelectedLocation] = React.useState();



  const findLocation = (id, setTab) => {
    if (!id) return setSearchText('Miami')
    const locData = weatherData.filter(loc => (loc.id === id))
    setSelectedLocation(id)
    setTypeTabIndex(setTab)
    return locData;
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
    window.localStorage.setItem('locations', JSON.stringify([...cleanedData, newData]))
    setSelectedLocation(newData.id)
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

  useEffect(() => {
    try {
      const locations = JSON.parse(window.localStorage.getItem('locations'))
      if (locations.length > 0) {
        setweatherData(locations)
        setSelectedLocation(locations[locations.length - 1].id)
      } else {
        setweatherData([])
      }
    } catch (e) {
      console.log(e)
    }
  }, [])


  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <MainNav unit={unit} setUnit={setUnit} setSearchText={setSearchText} weather={weatherData}
        id={selectedLocation} setTypeTabIndex={setTypeTabIndex} typeTabIndex={typeTabIndex} removeLocation={removeLocation}
      />

      <Route render={({ location }) =>
        <Switch location={location}>
          <Route exact path='/:locId/hourly' render={routeProps => (
            <HourlyForecastPage weather={findLocation(routeProps.match.params.locId, 1)} />
          )} />
          <Route exact path='/:locId' render={routeProps => (
            <TodayForecastPage weather={findLocation(routeProps.match.params.locId, 0)} />
          )} />
          <Route path='/' render={(routeProps) => (
            <>
              {selectedLocation ? <TodayForecastPage weather={findLocation(selectedLocation, 0)} /> : <h1></h1>}
            </>
          )} />
        </Switch>
      } />
    </div>
  );
}

export default App;
