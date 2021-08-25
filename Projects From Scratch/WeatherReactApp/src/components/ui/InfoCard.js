import React from 'react';
import Card from '@material-ui/core/Card';
import { useStyles } from '../../styles/cards/infoCardStyles'
import CardActions from '@material-ui/core/CardActions';
import CardButton from '../ui/Button'

function InfoCard(props) {
    const { cardTitle, cardSubTitle, route, buttonColor, buttonText, titleStyle } = props
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <div className={classes.content}>
                <div className={classes.headTitle}>
                    <div><h3 style={titleStyle}> {cardTitle}</h3>
                        <h4>{cardSubTitle}</h4>
                    </div>
                </div>
                <div className={classes.body}>
                    {props.children}
                </div>
            </div>
            {buttonText ? <div>
                <CardActions className={classes.button}>
                    <CardButton route={route} backgroundColor={buttonColor}>
                        {buttonText}
                    </CardButton>
                </CardActions>
            </div> : null}
        </Card >
    );
}

export default InfoCard;

