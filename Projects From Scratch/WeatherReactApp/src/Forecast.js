import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});


function Forecast({ weather, handleDrawerOpen }) {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h3" component="h1">
                    {`${weather.name}`}
                </Typography>

                <List>
                    <ListItem>
                        <ListItemText primary={`${weather.weather[0].description.replace(/\b\w/g, l => l.toUpperCase())}`} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={`Relative Humidity: ${weather.main.humidity}`} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={`Feels Like: ${weather.main.feels_like}`} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={`Min: ${weather.main.temp_min}° F, Max: ${weather.main.temp_max}° F`} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={`Wind Gusts: ${weather.wind.gust} mph`} />
                    </ListItem>
                </List>



                {`${weather.main.temp}° F`}
                {`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}


            </CardContent>
            <CardActions>
                <Button size="large" onClick={handleDrawerOpen}>Change Location</Button>
            </CardActions>
        </Card>
    );
}

export default Forecast;