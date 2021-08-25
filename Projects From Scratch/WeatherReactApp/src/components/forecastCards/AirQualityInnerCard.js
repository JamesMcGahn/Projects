import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useStyles } from '../../styles/cards/airQInnerCardStyles'
import 'react-circular-progressbar/dist/styles.css';

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

