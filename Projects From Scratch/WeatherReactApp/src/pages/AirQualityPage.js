import React from 'react';
import Page from '../components/layout/Page'
import InfoCard from '../components/ui/InfoCard';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const useStyles = makeStyles({
    airCard: {
        width: '60%',
        marginBottom: '2rem',
        height: '100%',
    },
    airContainer: {
        display: 'flex',
        width: '100%',
    },
    airQbody: {
        width: '65%',
        display: 'flex',
        padding: '15px',
    },
    primaryPol: {
        width: '30%',
        padding: '10px',
        '& h5': {
            marginBottom: 0
        },
        '& p': {
            marginTop: '10px'
        }
    },
    airQprog: {
        maxWidth: '20%',
    },
    airQtext: {
        marginLeft: '2rem',
        maxWidth: '80%',
        borderRight: '1px solid rgba(224, 224, 224, 1)',
        '& h3': {
            margin: 0
        },
        '& p': {
            marginTop: '1px'
        }
    }
});

const airQtyTest = [
    'Air quality is considered satisfactory, and air pollution poses little or no risk.',
    'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people.'
    , 'Although general public is not likely to be affected, persons with heart and lung disease, older adults and children are at greater risk from the presence of particles in the air'
    , 'Everyone may begin to experience some adverse health effects, and members of the sensitive groups may experience more serious effects.'
    , 'This would trigger a health alert signifying that everyone may experience more serious health effects.'
    , 'This would trigger health warnings of emergency conditions. The entire population is more likely to be affected.']

const pollutants = {
    o3: 'O3 (Ozone)',
    no2: 'NO2 (Nitrogen Dioxide)',
    so2: 'SO2 (Sulfur Dioxide)',
    pm25: 'PM 2.5',
    pm10: 'PM 10',
    co: 'CO (Carbon Monoxide)'
}



function AirQualityPage({ id, idChange, changeTab, findLocation }) {
    const classes = useStyles()
    const forecast = findLocation(id)
    let air
    if (forecast.length > 0 && forecast[0].air)
        air = { ...forecast[0].air }
    console.log(air)


    function airQty(value) {
        let text, color, textBody
        if (value > 0 && value <= 50) {
            text = 'Good'
            color = 'green'
            textBody = airQtyTest[0]
        } else if (value >= 50 && value <= 100) {
            text = 'Moderate'
            color = 'yellow'
            textBody = airQtyTest[1]
        }
        else if (value >= 100 && value <= 150) {
            text = 'Unhealthy for Sensitive Groups'
            color = 'orange'
            textBody = airQtyTest[2]
        }
        else if (value >= 151 && value <= 200) {
            text = 'Unhealthy'
            color = 'red'
            textBody = airQtyTest[3]
        }
        else if (value >= 201 && value <= 300) {
            text = 'Very Unhealthy'
            color = 'purple'
            textBody = airQtyTest[4]
        }
        else if (value >= 301 && value <= 500) {
            text = 'Hazardous'
            color = 'maroon'
            textBody = airQtyTest[5]
        }
        return (
            <div className={classes.airQbody} >
                <div className={classes.airQprog}>
                    <CircularProgressbar styles={{ path: { stroke: color }, text: { fill: 'black', fontSize: '3rem', fontFamily: 'Metabold' } }} value={value} maxValue={500} text={value} />
                </div>
                <div className={classes.airQtext}>
                    <h3>{text}</h3>
                    <p>{textBody}</p>
                </div>
            </div>
        )
    }

    function highestPollut(obj) {
        let max = 0
        let highPol = ''
        for (let key in obj) {
            if (obj[key] > max) {
                max = obj[key]
                highPol = key
            }
        }
        return highPol
    }
    const highestPollKey = highestPollut(air)

    return (
        <Page id={id} idChange={idChange} changeTab={changeTab} tab={5} findLocation={findLocation}>
            <div className={classes.airCard}>
                <InfoCard cardTitle={`Today's Air Quality`} titleStyle={{ fontSize: '1.5rem' }} >
                    <div className={classes.airContainer}>
                        {airQty(air.aqi)}
                        <div className={classes.primaryPol}>
                            <h5>Primary Pollutant:</h5>
                            <p>{pollutants[highestPollKey]}</p>
                        </div>
                    </div>

                </InfoCard>
            </div>
        </Page>
    );
}

export default AirQualityPage;