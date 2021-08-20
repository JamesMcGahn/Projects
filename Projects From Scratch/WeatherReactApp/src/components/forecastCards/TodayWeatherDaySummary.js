import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardButton from '../ui/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        minHeight: '35vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',

    },
    content: {
        minHeight: '80%',
        marginLeft: '15px',
        '& h3': {
            fontSize: '1.25rem',
            marginTop: '10px'
        }
    },
    expandCol: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        alignContent: "center",
        textAlign: "left",
        width: '25%',
        borderRight: '1px solid rgba(224, 224, 224, 1)',
        height: '',
    },
    fatext: {
        marginBottom: '7px',
        "& span": {
            display: "block"
        }
    },
    title: {
        fontSize: '1.2rem',
        fontFamily: 'Metabold',

    },
    favalue: {
        fontSize: '2.5rem',
        color: '#1b4de4',
        fontWeight: '800'
    },
    tablecont: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '35px',
        marginBottom: '20px',

    },
    button: {
        margin: '0 0 15px 15px',
    }
}))

function TodayWeatherDaySummary({ weather }) {
    const classes = useStyles()
    const { city, unit, id } = weather[0]
    const { day, eve, morn, night } = weather[0].daily[0].feels_like
    console.log(weather)
    return (
        <Card className={classes.root}>
            <div className={classes.content}>
                <div><h3> Today's Forecast for {city}</h3></div>
                <div className={classes.tablecont}>
                    <div className={classes.expandCol}>
                        <div className={classes.fatext}>
                            <span className={classes.title}>Morning</span>
                            <span className={classes.favalue}>{`${Math.ceil(morn)}${unit === 'imperial' ? "° F " : "° C"}`}</span>
                        </div>
                    </div>

                    <div className={classes.expandCol}>
                        <div className={classes.fatext}>
                            <span className={classes.title}>Afternoon</span>
                            <span className={classes.favalue}>{`${Math.ceil(day)}${unit === 'imperial' ? "° F " : "° C"}`}</span>
                        </div>
                    </div>

                    <div className={classes.expandCol}>
                        <div className={classes.fatext}>
                            <span className={classes.title}>Evening</span>
                            <span className={classes.favalue}>{`${Math.ceil(night)}${unit === 'imperial' ? "° F " : "° C"}`}</span>
                        </div>
                    </div>

                    <div className={classes.expandCol} style={{ border: 'none' }}>
                        <div className={classes.fatext}>
                            <span className={classes.title}>Overnight</span>
                            <span className={classes.favalue}>{`${Math.ceil(eve)}${unit === 'imperial' ? "° F " : "° C"}`}</span>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <CardActions className={classes.button}>
                    <CardButton route={`/daily/${id}`} backgroundColor='#1b4de4'>
                        Next Hours
                    </CardButton>
                </CardActions>
            </div>
        </Card >
    );
}

export default TodayWeatherDaySummary;