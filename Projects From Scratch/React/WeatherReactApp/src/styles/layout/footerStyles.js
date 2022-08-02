import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '20vh',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    iconsCont: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5px 0 5px 0'

    },
    iconsText: {
        fontSize: '1.3rem',
        marginRight: '10px',
    },
    icons: {
        '& a': {
            textDecoration: 'none',
        },
        '& svg': {
            color: '#3f51b5',
            fontSize: '2rem',
            marginRight: '3px'
        },
    },
    center: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-end',
        '& span': {
            fontSize: '.8rem',
            marginBottom: '3px'
        },
        '@media (max-width: 650px)': {
            width: '100%',
            justifyContent: 'center',
        },
    },
    right: {
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-end',
        '@media (max-width: 650px)': {
            width: '100%',
            justifyContent: 'center',
        }

    },
    imgCont: {
        width: '30%',

        '& img': {
            width: '30%',
        },
        '@media (max-width: 650px)': {
            width: '30%',
            margin: '5px 0 5px 0',
            '& img': {
                width: '100%',
            },
        },
    }
}));

export { useStyles }