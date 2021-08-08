import './App.css';
import React, { useEffect } from 'react';
import Forecast from './Forecast';
import Navbar from './Navbar';
import HistoryBar from './HistoryBar'
import { OW_API_KEY } from './keys.js'
import ForecastTypeBar from './ForecastTypeBar';


import { Switch, Route, Redirect } from 'react-router-dom'
import { uuid } from 'uuidv4';
import axios from 'axios'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper'

const drawerWidth = 340;
const useStyles = makeStyles((theme) => ({
  root: {

  }
}));

function App(props) {
  const [coords, setCoords] = React.useState('')
  const [city, setCity] = React.useState('');
  const [unit, setUnit] = React.useState('imperial')


  const [weatherData, setweatherData] = React.useState([]);
  const [searchText, setSearchText] = React.useState('')
  const [selectedLocation, setSelectedLocation] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedLocation(newValue);
  };


  const findLocation = (id) => {
    console.log(id)
    console.log('fuc', weatherData.filter(loc => (loc.id === id)))
    const locData = weatherData.filter(loc => (loc.id === id))
    console.log(locData)
    return locData;
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

        console.log(coords.latt, coords.longt)

      }
    }
    catch (e) {
      console.log('coords', e)
    }
  }

  const weatherFetch = async () => {
    try {
      if (coords === '') throw new Error('No coords')
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latt}&lon=${coords.longt}&units=imperial&appid=${OW_API_KEY}`);
      const { data } = response
      console.log(data)
      const newData = { ...data, id: uuid(), city: city }
      setSelectedLocation(newData.id)
      setCity('')
      setweatherData([...weatherData, newData])
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





  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar unit={unit} setUnit={setUnit} setSearchText={setSearchText} />
      <HistoryBar weather={weatherData} />
      <ForecastTypeBar id={selectedLocation} />

      <Route render={({ location }) =>
        <Switch location={location}>
          <Route exact path='/:locId' render={routeProps => (
            <Forecast weather={[findLocation(routeProps.match.params.locId)]} />
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
