import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    todaysum: {
        width: '60%',
        marginTop: '1rem'
    },
    summaryCard: {
        width: '60%',
        marginTop: '1rem'
    },
    mapDiv: {
        width: '60%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        minHeight: "60vh",
        '& #logo-wrapper': {
            top: 'initial',
            bottom: '65px'
        },
        '& #logo-wrapper #logo': {
            left: '90%',
            top: '90%',
        },
        '& #mobile-ovr-select': {
            display: 'none !important'
        }
    },
    btnDiv: {
        marginTop: '8px',

    },
    btnGroup: {
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            '& button.MuiButtonBase-root': {
                borderRight: 'none',
                borderBottom: ' 1px solid #bdbdbd'
            }
        },
        '& button': {
            textTransform: 'none',
            fontFamily: 'Meta',
            fontSize: '1rem',
            backgroundColor: '#1a357c',
            color: 'white'
        }
    }
}));


export { useStyles };