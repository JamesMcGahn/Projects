import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { makeStyles } from '@material-ui/core/styles';
import 'react-circular-progressbar/dist/styles.css';

const useStyles = makeStyles({

    airQbody: {
        width: '70%',
        display: 'flex',
        padding: '15px',

    },
    airQbodyAll: {
        width: '50%',
        display: 'flex',
        padding: '15px',
        borderBottom: '1px solid rgba(224, 224, 224, 1)',

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
    }
});


function AirQualityInnerCard({ value, title, rawValue, maxValue, color, textBody, rangeName, header, index }) {
    const classes = useStyles()
    let progressTextSize = header ? '3rem' : '2.4rem'
    let noHeaderBorder = header ? { borderBottom: 'none' } : {}
    return (
        <div className={header ? classes.airQbody : classes.airQbodyAll} style={index === 4 || index === 5 ? { border: 'none' } : {}}>
            <div className={header ? classes.airQprog : classes.airQprogBody} style={noHeaderBorder}>
                <CircularProgressbar styles={{ path: { stroke: color }, text: { fill: 'black', fontSize: progressTextSize, fontFamily: 'Metabold' } }} value={value} maxValue={maxValue} text={Math.ceil(value)} />
            </div>
            <div className={header ? classes.airQtext : classes.airQtextAll}>
                <h3>{header ? '' : title}</h3>
                <h4>{rangeName}</h4>
                <span>{header ? null : `${rawValue} µg/m³`}</span>
                <p>{header ? textBody : ''}</p>
            </div>
        </div >
    )
}

export default AirQualityInnerCard;

