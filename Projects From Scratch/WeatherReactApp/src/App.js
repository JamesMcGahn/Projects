import './App.css';
import React, { useEffect } from 'react';
import Forecast from './Forecast';
import Navbar from './Navbar';
import HistoryBar from './HistoryBar'
import WeatherTab from './WeatherTab'
import { OW_API_KEY } from './keys.js'


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

  const [open, setOpen] = React.useState('false');
  const [city, setCity] = React.useState('Miami');
  const [unit, setUnit] = React.useState('imperial')
  const [stateLoc, setStateLoc] = React.useState('FL');
  const [country, Setcountry] = React.useState('US');
  const [weatherData, setweatherData] = React.useState([]);
  const [searchText, setSearchText] = React.useState('')
  const [selectedLocation, setSelectedLocation] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedLocation(newValue);
  };

  const handleChangeIndex = (index) => {
    setSelectedLocation(index);
  };

  const findLocation = (id) => {
    console.log(id)
    console.log('fuc', weatherData.filter(loc => (loc.id === id)))
    return weatherData.filter(loc => (loc.id === id))
  }

  const weatherFetch = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${stateLoc},${country}&units=imperial&appid=${OW_API_KEY}`);
      const { data } = response
      console.log(data)
      const newData = { ...data, id: uuid(), }
      setSelectedLocation(newData.id)
      return setweatherData([...weatherData, newData])
    } catch (e) {
      console.log(e)
    }
  }


  useEffect(() => {
    weatherFetch()
    console.log(weatherData)
  }, [city])


  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar unit={unit} setUnit={setUnit} setSearchText={setSearchText} />
      <HistoryBar weather={weatherData} />

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
