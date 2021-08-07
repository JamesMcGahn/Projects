import './App.css';
import React, { useEffect } from 'react';
import Forecast from './Forecast';
import Navbar from './Navbar';
import { OW_API_KEY } from './keys.js'


import axios from 'axios'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

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
  const [stateLoc, setStateLoc] = React.useState('FL');
  const [country, Setcountry] = React.useState('US');
  const [weatherData, setweatherData] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const weatherFetch = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${stateLoc},${country}&units=imperial&appid=${OW_API_KEY}`);
      const { data } = response
      console.log(data)
      return setweatherData(data)
    } catch (e) {
      console.log(e)
    }
  }


  useEffect(() => {
    weatherFetch()
  }, [city])


  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar handleDrawerOpen={handleDrawerOpen} open={open} />
      {weatherData &&
        <Forecast weather={weatherData} handleDrawerOpen={handleDrawerOpen} className={classes.paper} />
      }
    </div>
  );
}

export default App;
