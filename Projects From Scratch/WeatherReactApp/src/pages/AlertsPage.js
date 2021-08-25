import React from 'react';
import Page from '../components/layout/Page'
import InfoCard from '../components/ui/InfoCard'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from '../styles/pages/alertsForecastPageStyles.js'


function stringCleaner(string) {
    if (string.includes('*')) {
        let strarry = string.split('*')
        return strarry.map(p => <p>{p}</p>)
    } else if (string.includes('...')) {
        let strarry = string.split('...')
        return strarry.map(p => <p>{p}</p>)
    } else return string
}


function AlertsPage(props) {
    const { id, findLocation, idChange, changeTab, } = props
    const classes = useStyles()
    const forecast = findLocation(id)

    let alerts
    let allAlerts

    if (forecast[0].alerts) {
        alerts = forecast[0].alerts
        allAlerts = alerts.map((alert, i) => {
            return (
                < Accordion key={`${alert.event}-${i}`}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <span className={classes.warn}> <FontAwesomeIcon icon={faExclamationCircle} size="sm" /></span>
                        <span className={classes.accTitle}> {`${alert.event.replace(/\b\w/g, l => l.toUpperCase())} Alert `} </span>
                    </AccordionSummary>
                    <AccordionDetails key={`${alert.sender_name}-${i}`}>
                        <div className={classes.accDetail}>
                            <h6>Issued By:</h6>
                            <p >{alert.sender_name}</p>
                            <h6 style={{ margin: '15px 0 0 0' }}>Description:</h6>
                            {stringCleaner(alert.description)}
                        </div>
                    </AccordionDetails>
                </Accordion>
            )
        })
    }

    return (
        <Page id={id} idChange={idChange} changeTab={changeTab} tab={6} findLocation={findLocation} >
            <div className={classes.todaysum}>
                < InfoCard cardTitle={< span ><h2>Weather Alerts</h2> <h3> - {forecast[0].city}</h3> </span>} route={`/hourly/${id}`}
                    buttonColor={'#1b4de4'} buttonText={'Hourly Forecast'}
                    iconColor={'#1b4de4'} key={`Alerts-${id}`}  >

                    {forecast[0].alerts ? allAlerts : <p className={classes.accDetail} key={`${id}`}>No Weather Alerts at this Time</p>}

                </InfoCard>


            </div>
        </Page >
    );
}

export default AlertsPage;

