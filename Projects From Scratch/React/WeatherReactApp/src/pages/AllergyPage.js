import React from 'react';
import Page from '../components/layout/Page'
import InfoCard from '../components/ui/InfoCard';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useStyles } from '../styles/pages/allergyForecastPage'

function AirQualityPage({ id, idChange, changeTab, findLocation }) {
    const classes = useStyles()
    const forecast = findLocation(id)
    let air
    if (forecast.length > 0 && forecast[0].air)
        air = { ...forecast[0].air }

    function createColumns(value, name,) {
        return { value, name }
    }

    const allergies = [
        createColumns(air.pollen_level_tree, 'Tree Pollen',),
        createColumns(air.pollen_level_grass, 'Grass Pollen',),
        createColumns(air.pollen_level_weed, 'Ragween Pollen'),
        createColumns(air.mold_level, 'Mold',)
    ]

    return (
        <Page id={id} idChange={idChange} changeTab={changeTab} tab={5} findLocation={findLocation}>
            <div className={classes.airCard}>
                <InfoCard cardTitle={`Pollen Breakdown`} titleStyle={{ fontSize: '1.5rem' }} >
                    <div className={classes.airContainer}>
                        <div className={classes.header}>
                            <h4>
                                Predominant Pollen Type:
                            </h4>
                            <span>{air.predominant_pollen_type}</span>
                        </div>
                        <div className={classes.resultsCont}>
                            {allergies.map((aler, i) => {
                                const color = aler.value === 0 || aler.value === 1 ? 'green' : aler.value === 2 ? 'yellow' : aler.value === 3 ? 'orange' : aler.value === 4 ? 'red' : ''
                                const levelText = aler.value === 0 || aler.value === 1 ? 'Low' : aler.value === 2 ? 'Moderate' : aler.value === 3 ? 'High' : aler.value === 4 ? 'Very High' : ''
                                return (
                                    <div className={classes.smallCont} key={`${i}-allergy-${aler.name}`} style={i === 3 ? { borderRight: 'none' } : {}}>
                                        <div className={classes.progess} >
                                            <CircularProgressbar styles={{ path: { stroke: color }, text: { fill: 'black', fontSize: '2rem', fontFamily: 'Metabold' } }} value={aler.value} minValue={0} maxValue={4} text={aler.value.toString()} />
                                        </div>
                                        <div className={classes.text}>
                                            <h6>{aler.name}</h6>
                                            <span>Level: {levelText}</span>
                                        </div>
                                    </div>
                                )
                            })


                            }
                        </div>
                    </div>
                </InfoCard>
            </div>
        </Page>
    );
}

export default AirQualityPage;