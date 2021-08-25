import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardButton from '../ui/Button'
import { useStyles } from '../../styles/ui/summaryCardStyles'

function SummaryCard(props) {
    const { cardTitle, cardData, unit, route, buttonColor, buttonText, iconColor, mobileWidth, mobileTextAlign } = props
    const width = mobileWidth ? mobileWidth : cardData.length
    const classes = useStyles({ itemsLength: width, iconColor })
    return (
        <Card className={classes.root}>
            <div className={classes.content}>
                <div><h3> {cardTitle}</h3></div>
                <div className={classes.tablecont}>
                    {cardData.length > 0 ?
                        cardData.map((item, i) => {
                            return (
                                <div key={cardTitle + `-${i}`} className={classes.expandCol} style={cardData.length - 1 === i ? { border: 'none' } : null}>
                                    <div className={classes.fatext}>
                                        <span className={classes.title}>{item.title}</span>
                                        <span className={classes.favalue}>{`${Math.ceil(item.value)}${unit ? `${unit === 'imperial' ? "° F " : "° C"}` : '°'}`
                                        }</span>
                                        {item.valueSubtext ? <span className={classes.valueSubtext}>{item.valueSubtext}</span> : null}
                                        {item.icon ? <img className={classes.icon} src={item.icon} alt={item.iconText} /> : null}
                                        {item.bottomText ? <span className={classes.bottomText}>{item.bottomText}</span> : null}
                                    </div>
                                </div>
                            )
                        })
                        : ''
                    }
                </div>
            </div>
            <div>
                <CardActions className={classes.button}>
                    <CardButton route={route} backgroundColor={buttonColor}>
                        {buttonText}
                    </CardButton>
                </CardActions>
            </div>
        </Card >
    );
}

export default SummaryCard;

