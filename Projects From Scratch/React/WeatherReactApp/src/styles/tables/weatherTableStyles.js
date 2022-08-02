import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    banner: {
        border: 'none',
        lineHeight: 0,
        padding: '.3rem'
    },
    paper: {
        width: '100%',
        marginTop: 0,
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    container: {
        width: '65%',
        [theme.breakpoints.down('md')]: {
            width: '85%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    headTitle: {
        width: '100%',
        padding: '10px 0 0 15px ',
        "& h2": {
            margin: 0,
            display: 'inline-block',
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
    tableContainer: {
        padding: '0 1rem 0 1rem',
        margin: 0,
    }
}));
export { useStyles }