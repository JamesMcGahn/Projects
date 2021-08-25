import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    airQbody: {
        width: '75%',
        display: 'flex',
        padding: '15px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: '0'
        }

    },
    airQbodyAll: {
        marginTop: '10px',
        width: '50%',
        display: 'flex',
        padding: '15px',
        borderBottom: '1px solid rgba(224, 224, 224, 1)',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: '0'
        }
    },

    airQprog: {
        maxWidth: '20%',
    },
    airQprogBody: {
        maxWidth: '15%',

    },
    airQtext: {
        marginLeft: '1.5rem',
        paddingRight: '1rem',
        width: '100%',
        maxWidth: '80%',
        borderRight: '1px solid rgba(224, 224, 224, 1)',
        paddingRight: '2px',
        '& h3': {
            margin: 0
        },
        '& p': {
            marginTop: '1px',
            marginRight: '2px'
        },
        [theme.breakpoints.down('sm')]: {
            borderRight: 'none',
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

        },

    }
}));

export { useStyles }