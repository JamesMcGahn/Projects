import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardButton from '../ui/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        minHeight: '20vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    headTitle: {
        width: '100%',
        padding: '10px 0 0 15px ',
        "& h2": {
            margin: 0,
            display: 'inline-block',
            fontSize: '1.3rem'
        },
        "& h3": {
            display: 'inline-block',
            fontWeight: 400,
            fontSize: '1.1rem',
            margin: 0,
        },
        "& h4": {
            marginTop: '.5rem',
            color: 'grey',
            fontWeight: 400,
            fontSize: '1rem'
        }
    },
    content: {
        minHeight: '10vh',
        marginLeft: '15px',
        marginRight: '15px',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '5px',
        marginBottom: '20px',
        '& h3': {
            fontSize: '1.25rem',
            marginTop: '10px'
        }
    },
    body: {
        minHeight: '10vh',
        fontSize: '1.25rem',
    },

    button: {
        margin: '0 0 15px 15px',
    },
    topCardTitle: {
        '& h3': {
            fontSize: '4rem',
        }
    }
}))

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

