
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.05)',
        color: 'white',
        padding: '10px 5px 10px 5px'
    },
    text: {

        width: '60%',
        height: '100%',
        marginTop: '20px',
        '& h2, h4': {
            padding: 0,
            margin: 0
        },
        '& h2': {
            fontSize: '1.3rem',
        },

    },
    icon: {
        padding: '.5rem',
        width: '30%',
        textAlign: 'center',
        fontSize: '1.5rem',
        '& img': {
            width: '90%',
            marginBottom: 0
        }
    },
    temp: {
        fontSize: '4.8rem',
        margin: '0',
        padding: '0',
        fontFamily: 'Metabold',
    },
    desscript: {
        fontSize: '1.45rem',
        fontFamily: 'Metabold',
    },
    time: {
        fontSize: '1.2rem',
        fontFamily: 'Meta',
        fontWeight: 400
    },
    rain: {
        fontSize: '1.2rem',
        margin: '0',
        color: 'white',
    },
    alert: {
        "& a": {
            textDecoration: 'none'
        },
        "& svg": {
            color: 'white',
        }

    },
    lowHigh: {
        marginTop: 0,
        fontSize: '1.8rem',
        fontFamily: 'Metabold',
    },
    warn: {
        '& svg': {
            color: 'yellow'
        },
    }
});

export { useStyles }