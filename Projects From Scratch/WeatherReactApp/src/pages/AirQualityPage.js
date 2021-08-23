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
    allPols: {
        width: '60%',
        marginBottom: '2rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',

    },
    airContainer: {
        display: 'flex',
        width: '100%',
    },
    airQbody: {
        width: '100%',
        display: 'flex',
        padding: '15px',

    },
    airQbodyAll: {
        width: '100%',
        display: 'flex',
        padding: '15px',
        borderBottom: '1px solid rgba(224, 224, 224, 1)',

    },
    airQheader: {
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
    airQprogBody: {
        maxWidth: '15%',

    },
    airQtext: {
        marginLeft: '2rem',
        maxWidth: '80%',
        borderRight: '1px solid rgba(224, 224, 224, 1)',
        paddingRight: '2px',
        '& h3': {
            margin: 0
        },
        '& p': {
            marginTop: '1px',
            marginRight: '2px'
        }
    },
    airQtextAll: {
        marginLeft: '2rem',
        maxWidth: '80%',
        '& h3': {
            margin: 0
        },
        '& h4': {
            marginTop: '4px',
            fontSize: '1rem',
            fontWeight: 'normal',
            marginBottom: 0,
            lineHeight: '1.2',
            color: '#6f7585',
        },
        '& span': {
            marginTop: 0,
            fontSize: '.9rem',
            color: '#6f7585',

        }
    },
    smallCont: {
        width: '50%',

    },
    allPolsCont: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
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


    function airQty(value, title, aqiVal, header, index) {
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
        let progressTextSize = header ? '3rem' : '2.4rem'
        let noHeaderBorder = header ? { borderBottom: 'none' } : {}
        return (
            <div className={header ? classes.airQbody : classes.airQbodyAll} style={index === 4 || index === 5 ? { border: 'none' } : {}}>
                <div className={header ? classes.airQprog : classes.airQprogBody} style={noHeaderBorder}>
                    <CircularProgressbar styles={{ path: { stroke: color }, text: { fill: 'black', fontSize: progressTextSize, fontFamily: 'Metabold' } }} value={value} maxValue={500} text={Math.ceil(value)} />
                </div>
                <div className={header ? classes.airQtext : classes.airQtextAll}>
                    <h3>{header ? '' : title}</h3>
                    <h4>{text}</h4>
                    <span>{header ? null : `${aqiVal} µg/m³`}</span>
                    <p>{header ? textBody : ''}</p>
                </div>
            </div >
        )
    }

    const createRows = (title, value, valAqi,) => {
        return { title, value, valAqi, }
    }

    const pollutants = {
        o3: 'O3 (Ozone)',
        no2: 'NO2 (Nitrogen Dioxide)',
        so2: 'SO2 (Sulfur Dioxide)',
        pm25: 'PM 2.5',
        pm10: 'PM 10',
        co: 'CO (Carbon Monoxide)'
    }
    // convert ug/m3 to ppb and then to ppm
    const co = ((1 / 1.145) * air.co) / 1000
    // convert ug/m3 to ppb
    const so2 = ((1 / 2.62) * air.so2)
    const no2 = ((1 / 1.88) * air.no2)
    const o3 = ((1 / 2.00) * air.o3)

    const polData = [
        createRows(pollutants['o3'], o3, air.o3,),
        createRows(pollutants['no2'], no2, air.no2),
        createRows(pollutants['so2'], so2, air.so2),
        createRows(pollutants['pm25'], air.pm25, air.pm25),
        createRows(pollutants['pm10'], air.pm10, air.pm10),
        createRows(pollutants['co'], co, air.co),
    ]

    const fixedAqiPol =
    {
        pm10: air.pm10,
        co: co,
        o3: o3,
        so2: so2,
        no2: no2,
        pm25: air.pm25,
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
    const highestPollKey = highestPollut(fixedAqiPol)
    console.log(highestPollKey)
    return (
        <Page id={id} idChange={idChange} changeTab={changeTab} tab={5} findLocation={findLocation}>
            <div className={classes.airCard}>
                <InfoCard cardTitle={`Today's Air Quality`} titleStyle={{ fontSize: '1.5rem' }} >
                    <div className={classes.airContainer}>
                        {airQty(air.aqi, air.aqi, air.aqi, true)}
                        <div className={classes.primaryPol}>
                            <h5>Primary Pollutant:</h5>
                            <p>{pollutants[highestPollKey]}</p>
                        </div>
                    </div>

                </InfoCard>
            </div>
            <div className={classes.allPols}>
                <InfoCard cardTitle={'All Pollutants'}>
                    <div className={classes.allPolsCont}>
                        {polData.map((p, i) => {
                            return <div className={classes.smallCont}> {airQty(p.value, p.title, p.valAqi, false, i)}</div>;
                        })}
                    </div>
                </InfoCard>
            </div>

        </Page>
    );
}

export default AirQualityPage;