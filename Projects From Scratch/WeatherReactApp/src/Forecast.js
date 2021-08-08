import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '75vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    card: {
        width: '50%',

    }
});


function Forecast({ weather }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Card className={classes.card}>

                {weather.flat().map((weather, i) => {
                    return (
                        < CardContent key={i}>
                            <Typography gutterBottom variant="h3" component="h1">
                                {`${weather.city}`}
                            </Typography>
                            {`${weather.current.temp}${weather.unit === 'imperial' ? "°F " : "°C"}`}
                            <List>
                                <ListItem>
                                    <ListItemText primary={`${weather.current.weather[0].description.replace(/\b\w/g, l => l.toUpperCase())}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`Relative Humidity: ${weather.current.humidity}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`Feels Like: ${weather.current.feels_like}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`Min: ${weather.current.temp} ${weather.unit === 'imperial' ? "°F " : "°C"} `} />
                                </ListItem>

                            </List>




                            {`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}


                        </CardContent>
                    )
                })
                }
                <CardActions>
                    <Button size="large" >Change Location</Button>
                </CardActions>
            </Card >
        </ div>
    );
}

export default Forecast;