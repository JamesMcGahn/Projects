import React from 'react';
import Page from '../components/layout/Page'
import InfoCard from '../components/ui/InfoCard';
import AirQualityInnerCard from '../components/forecastCards/AirQualityInnerCard'
import airQualityHelper from '../helpers/airQualityHelper';
import { makeStyles } from '@material-ui/core/styles';

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
    smallCont: {
        width: '50%',
    },
    allPolsCont: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});



function AirQualityPage({ id, idChange, changeTab, findLocation }) {
    const classes = useStyles()
    const forecast = findLocation(id)
    let air
    if (forecast.length > 0 && forecast[0].air)
        air = { ...forecast[0].air }




    const allPols = airQualityHelper(air)

    return (
        <Page id={id} idChange={idChange} changeTab={changeTab} tab={5} findLocation={findLocation}>
            <div className={classes.airCard}>
                <InfoCard cardTitle={`Today's Air Quality`} titleStyle={{ fontSize: '1.5rem' }} >
                    <div className={classes.airContainer}>
                        <AirQualityInnerCard value={allPols[0].value} title={allPols[0].name} rawValue={allPols[0].rawValue} maxValue={allPols[0].totalRange}
                            color={allPols[0].currentColor} textBody={allPols[0].currentText} rangeName={allPols[0].currentRange} header={true} index={0} />
                        <div className={classes.primaryPol}>
                            <h5>Primary Pollutant:</h5>
                            <p>{allPols[2].name}</p>
                        </div>
                    </div>

                </InfoCard>
            </div>
            <div className={classes.allPols}>
                <InfoCard cardTitle={'All Pollutants'}>
                    <div className={classes.allPolsCont}>
                        {allPols[1].map((p, i) => {
                            return <AirQualityInnerCard className={classes.smallCont} value={p.value} title={p.name} rawValue={p.rawValue}
                                maxValue={p.totalRange} color={p.currentColor} textBody={p.currentText} rangeName={p.currentRange} header={false} index={i} />
                        })}
                    </div>
                </InfoCard>
            </div>

        </Page>
    );
}

export default AirQualityPage;