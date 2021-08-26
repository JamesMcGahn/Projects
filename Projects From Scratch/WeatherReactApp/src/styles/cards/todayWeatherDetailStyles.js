import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '59.5vw',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        padding: '5px 10px 10px 10px',
    },
    header: {
        width: '100%',
        color: 'black',
        "& h3": {
            marginTop: '5px',
            marginBottom: '5px',
            fontSize: '1.25rem',
            marginLeft: '5px',
            fontFamily: 'Meta',
            fontWeight: '600'
        }
    },
    tableCont: {
        display: 'flex',
        "& svg": {
            color: 'black',
            fontSize: '1.2rem'
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
    },
    table: {
        width: '100%',
    },
    left: {
        minWidth: '29vw',
    },
    right: {
        marginLeft: '3px',
        minWidth: '29vw'
    },
    icon: {
        marginRight: '3px'
    },
    feels: {
        fontSize: '3rem',
        color: '#1b4de4',
        fontWeight: '800',
    },
    feelsText: {
        display: 'block',
        fontSize: '1.2rem'
    },
    content: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '15px'
    },
    temp: {
        width: '50%',
        textAlign: 'left',
        marginLeft: '3%'
    },
    sun: {
        width: '50%'
    },
}));
export { useStyles }