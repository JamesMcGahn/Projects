import React, { useEffect } from 'react';
import Page from '../components/layout/Page'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

// import '../styles/windyMap.css'
import { W_API_KEY } from '../keys'

const useStyles = makeStyles({
    todaysum: {
        width: '60%',
        marginTop: '1rem'
    },
    summaryCard: {
        width: '60%',
        marginTop: '1rem'
    },
    mapDiv: {
        width: '60%',
        minHeight: "60vh",
        '& #logo-wrapper': {
            top: 'initial',
            bottom: '65px'
        },
        '& #logo-wrapper #logo': {
            left: '90%',
            top: '90%',
        }
    },
    btnDiv: {
        marginTop: '8px',

    },
    btnGroup: {
        '& button': {
            textTransform: 'none',
            fontFamily: 'Meta',
            fontSize: '1rem',
            backgroundColor: '#1a357c',
            color: 'white'
        }
    }
});


function RadarForecastPage(props) {
    const { id, findLocation, idChange, changeTab, } = props
    const classes = useStyles()
    const forecast = findLocation(id)
    const windyInit = window.windyInit
    const L = window.L
    const W = window.W
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

    useEffect(() => { renderMap() }, [])



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