import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    airCard: {
        width: '60%',
        marginBottom: '1rem',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        }
    },
    allPols: {
        width: '60%',
        marginBottom: '2rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        }
    },
    airContainer: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
    },
    smallCont: {
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    allPolsCont: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
    },
    menuDiv: {
        width: '25%',
        minWidth: '275px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        width: '100%'
    },
    menuCont: {
        width: '100%',
        display: 'flex',
        padding: '5px',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    menuRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    colorCol: {
        width: '10%',
        height: '100%'
    },
    color: {
        minWidth: '1rem',
        minHeight: '1rem'
    },
    colorAqi: {
        marginLeft: '4px',
        width: '100%'
    },
    colorRange: {
        width: '50%',
        marginLeft: '10px'
    },
    menuBtn: {
        color: 'white',
        backgroundColor: '#1b4de4',
        '& :hover': {
            color: 'black',
        }
    },
    buttonText: {
        marginLeft: '4px'
    },
    primaryPol: {
        width: '20%',
        padding: '10px',
        '& h5': {
            marginBottom: 0
        },
        '& p': {
            marginTop: '10px'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
}));

export { useStyles }