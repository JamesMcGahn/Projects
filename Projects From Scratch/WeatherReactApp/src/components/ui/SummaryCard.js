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

function SummaryCard(props) {
    const classes = useStyles()
    const { cardTitle, cardData, unit, route, buttonColor, buttonText } = props
    return (
        <Card className={classes.root}>
            <div className={classes.content}>
                <div><h3> {cardTitle}</h3></div>
                <div className={classes.tablecont}>
                    {cardData.length > 0 ?
                        cardData.map((item, i) => {
                            return (
                                <div className={classes.expandCol} style={cardData.length - 1 === i ? { border: 'none' } : null}>
                                    <div className={classes.fatext}>
                                        <span className={classes.title}>{item.title}</span>
                                        <span className={classes.favalue}>{`${Math.ceil(item.value)}${unit === 'imperial' ? "° F " : "° C"}`}</span>
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

