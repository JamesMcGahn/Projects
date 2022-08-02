import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    airCard: {
        width: '60%',
        marginBottom: '1rem',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        }
    },
    airContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
    },
    resultsCont: {
        display: 'flex',
        width: '100%',
        marginTop: '1rem',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'row',
            flexWrap: 'wrap'
        }
    },
    smallCont: {
        width: '25%',
        borderRight: '1px solid rgba(224, 224, 224, 1)',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            borderRight: 'none',
        }
    },
    header: {
        width: '100%',
        '& h4': {
            margin: ' 0 .5rem 0 1rem',
            fontSize: '1rem',
            display: 'inline-block',
        },
        '& span': {
            fontSize: '1rem'
        }
    },
    progess: {
        padding: '1.5rem',
        width: '100%'
    },
    text: {
        textAlign: 'center',
        '& h6': {
            margin: ' 0 .5rem 0 1rem',
            fontSize: '1rem'
        },
        '& span': {
            fontSize: '.9rem'
        }
    }
}));

export { useStyles }