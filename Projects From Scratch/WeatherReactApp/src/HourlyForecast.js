import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles, } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});


function HourlyForecast({ weather }) {
    const classes = useStyles()
    const { hourly } = weather[0][0]
    const { city } = weather[0][0]
    const dayHourly = hourly.filter((item, index) => index <= 24)
    return (
        <Card className={classes.root}>
            < CardContent >
                <Typography gutterBottom variant="h4" component="h4">
                    {`${city}`}
                </Typography>
                {dayHourly.map((weather, i) => {
                    const convertTime = new Date(weather.dt * 1000).toLocaleTimeString('en-US', { timeStyle: 'short' })
                    return (
                        <>
                            <List>
                                <ListItem>
                                    <ListItemText primary={convertTime} />
                                    <ListItemText primary={`${weather.temp}${weather.unit === 'imperial' ? "°F " : "°C"}`} />
                                    <ListItemText primary={`${weather.weather[0].description.replace(/\b\w/g, l => l.toUpperCase())}`} />
                                    <ListItemText primary={`Relative Humidity: ${weather.humidity}`} />
                                    <ListItemText primary={`Wind: ${weather.wind_speed} ${weather.unit === 'imperial' ? "°F " : "°C"} `} />
                                </ListItem>
                            </List>
                        </>
                    )
                })
                }
            </CardContent>
        </Card >
    );
}

export default HourlyForecast;