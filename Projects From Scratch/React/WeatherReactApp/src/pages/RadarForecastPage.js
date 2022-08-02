import React, { useEffect } from 'react';
import Page from '../components/layout/Page'
import { useStyles } from '../styles/pages/radarForecastPageStyles.js'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { W_API_KEY } from '../keys'

function RadarForecastPage(props) {
    const { id, findLocation, idChange, changeTab, } = props
    const classes = useStyles()
    const forecast = findLocation(id)
    const windyInit = window.windyInit
    let timer
    const L = window.L
    let lon, lat, city
    if (forecast.length > 0) {
        lon = forecast[0].lon
        lat = forecast[0].lat
        city = forecast[0].city
    }

    let map, store, changeOverlay
    const renderMap = () => {
        const options = {
            key: W_API_KEY,
            lat: lat,
            lon: lon,
            zoom: 6,
        };

        windyInit(options, (windyAPI) => {
            map = windyAPI.map
            store = windyAPI.store;
            L.popup()
                .setLatLng([lat, lon])
                .setContent(`${city}`)
                .openOn(map);
            changeOverlay = (type) => {
                store.set('overlay', type, { forceChange: true })
            }
        });
    };

    useEffect(() => {
        if (timer) clearTimeout(timer)
        renderMap()

        timer = setTimeout(() => {
            const play = document.getElementById('playpause')
            if (play) play.click();
        }, 3000)

    }, [])



    return (
        <Page id={id} idChange={idChange} changeTab={changeTab} tab={4} findLocation={findLocation}>
            <div id="windy" className={classes.mapDiv}>
            </div>
            <div className={classes.btnDiv}>
                <ButtonGroup variant="contained" classes={{ root: classes.btnGroup }} aria-label="outlined primary button group">
                    <Button onClick={() => changeOverlay('rain')}>Rain</Button>
                    <Button onClick={() => changeOverlay('temp')}>Temperature</Button>
                    <Button onClick={() => changeOverlay('wind')}>Wind</Button>
                    <Button onClick={() => changeOverlay('pressure')}>Pressure</Button>
                    <Button onClick={() => changeOverlay('clouds')}>Cloud</Button>
                    <Button onClick={() => changeOverlay('waves')}>Waves</Button>
                    <Button onClick={() => changeOverlay('currents')}>Currents</Button>
                </ButtonGroup>
            </div>
        </Page >
    );
}

export default RadarForecastPage;