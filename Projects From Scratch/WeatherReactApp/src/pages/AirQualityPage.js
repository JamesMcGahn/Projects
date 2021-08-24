import React from 'react';
import Page from '../components/layout/Page'
import InfoCard from '../components/ui/InfoCard';
import AirQualityInnerCard from '../components/forecastCards/AirQualityInnerCard'
import airQualityHelper from '../helpers/airQualityHelper';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    airCard: {
        width: '60%',
        marginBottom: '1rem',
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
    },
    menuDiv: {
        width: '25%',
        minWidth: '275px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        width: '100%'
    },
    menuCont: {
        width: '100%',
        display: 'flex',
        padding: '5px',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    menuRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    colorCol: {
        width: '10%',
        height: '100%'
    },
    color: {
        minWidth: '1rem',
        minHeight: '1rem'
    },
    colorAqi: {
        marginLeft: '4px',
        width: '100%'
    },
    colorRange: {
        width: '50%',
        marginLeft: '10px'
    },
    menuBtn: {
        color: 'white',
        backgroundColor: '#1b4de4',
        '& :hover': {
            color: 'black',
        }
    },
    buttonText: {
        marginLeft: '4px'
    },
    primaryPol: {
        width: '20%',
        padding: '10px',
        '& h5': {
            marginBottom: 0
        },
        '& p': {
            marginTop: '10px'
        }
    },
});



function AirQualityPage({ id, idChange, changeTab, findLocation }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles()
    const forecast = findLocation(id)
    let air
    if (forecast.length > 0 && forecast[0].air)
        air = { ...forecast[0].air }

    const allPols = airQualityHelper(air)

    const handleClick = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        event.stopPropagation();
        setAnchorEl(null);
    };

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
                            return <AirQualityInnerCard key={`innerCard-${i}`} className={classes.smallCont} value={p.value} title={p.name} rawValue={p.rawValue}
                                maxValue={p.totalRange} color={p.currentColor} textBody={p.currentText} rangeName={p.currentRange} header={false} index={i} />
                        })}
                    </div>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="primary" classes={{ root: classes.menuBtn }}>
                        <InfoIcon /> <span className={classes.buttonText}>Air Quality Index</span>
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        getContentAnchorEl={null}
                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                        transformOrigin={{ vertical: "top", horizontal: "center" }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        classes={{ paper: classes.menuDiv, list: classes.list }}
                    >
                        <div className={classes.menuCont}>
                            <div className={classes.menuRow}>
                                <div className={classes.color} style={{ backgroundColor: 'green' }}></div>
                                <div className={classes.colorRange}>0 to 50</div>
                                <div className={classes.colorAqi}>Good</div>
                            </div>
                            <div className={classes.menuRow}>
                                <div className={classes.color} style={{ backgroundColor: 'yellow' }}></div>
                                <div className={classes.colorRange}>51 to 100</div>
                                <div className={classes.colorAqi}>Moderate</div>
                            </div>
                            <div className={classes.menuRow}>
                                <div className={classes.color} style={{ backgroundColor: 'orange' }}></div>
                                <div className={classes.colorRange}>101 to 150</div>
                                <div className={classes.colorAqi}>Unhealthy for Sensitive Groups</div>
                            </div>
                            <div className={classes.menuRow}>
                                <div className={classes.color} style={{ backgroundColor: 'red' }}></div>
                                <div className={classes.colorRange}>151 to 200</div>
                                <div className={classes.colorAqi}>Unhealthy</div>
                            </div>
                            <div className={classes.menuRow}>
                                <div className={classes.color} style={{ backgroundColor: 'purple' }}></div>
                                <div className={classes.colorRange}>201 to 300</div>
                                <div className={classes.colorAqi}>Very Unhealthy</div>
                            </div>
                            <div className={classes.menuRow}>
                                <div className={classes.color} style={{ backgroundColor: 'maroon' }}></div>
                                <div className={classes.colorRange}>301 to 500</div>
                                <div className={classes.colorAqi}>Hazardous</div>
                            </div>
                        </div>
                    </Menu >
                </InfoCard>
            </div>

        </Page>
    );
}

export default AirQualityPage;