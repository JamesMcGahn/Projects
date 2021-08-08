import './App.css';
import React, { useEffect } from 'react';
import Forecast from './Forecast';
import Navbar from './Navbar';
import HistoryBar from './HistoryBar'
import HourlyForecast from './HourlyForecast';
import { OW_API_KEY } from './keys.js'
import ForecastTypeBar from './ForecastTypeBar';


import { Switch, Route, Redirect } from 'react-router-dom'
import { uuid } from 'uuidv4';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
  root: {

  }
}));

function App(props) {
  const [coords, setCoords] = React.useState('')
  const [city, setCity] = React.useState('');
  const [unit, setUnit] = React.useState('imperial')
  const [typeTabIndex, setTypeTabIndex] = React.useState(0);

  const [weatherData, setweatherData] = React.useState([]);
  const [searchText, setSearchText] = React.useState('')
  const [selectedLocation, setSelectedLocation] = React.useState(0);

  const findLocation = (id, setTab) => {
    const locData = weatherData.filter(loc => (loc.id === id))
    setSelectedLocation(id)
    setTypeTabIndex(setTab)
    return locData;
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
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latt}&lon=${coords.longt}&units=imperial&appid=${OW_API_KEY}`);
      const { data } = response
      console.log(data)
      const newData = { ...data, id: uuid(), city: city, unit: unit }
      setSelectedLocation(newData.id)
      setCity('')
      checkData(newData)

      return (
        <Redirect to='/' />
      )
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

  useEffect(() => {
    window.localStorage.setItem('locations', JSON.stringify(weatherData))
  }, [weatherData])


  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar unit={unit} setUnit={setUnit} setSearchText={setSearchText} />
      <HistoryBar weather={weatherData} />
      <ForecastTypeBar id={selectedLocation} setTypeTabIndex={setTypeTabIndex} typeTabIndex={typeTabIndex} />

      <Route render={({ location }) =>
        <Switch location={location}>
          <Route exact path='/:locId/hourly' render={routeProps => (
            <HourlyForecast weather={[findLocation(routeProps.match.params.locId, 1)]} />
          )} />
          <Route exact path='/:locId' render={routeProps => (
            <Forecast weather={[findLocation(routeProps.match.params.locId, 0)]} />
          )} />
          <Route path='/' render={(routeProps) => (
            <>
              {selectedLocation && <Forecast weather={findLocation(selectedLocation)} />}
            </>
          )} />
        </Switch>
      } />




    </div>
  );
}

export default App;
