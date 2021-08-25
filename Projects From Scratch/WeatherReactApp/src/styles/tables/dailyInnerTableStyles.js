import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {

    },
    expandCol: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        alignContent: "center",
        textAlign: "left",
        width: "100%",
        marginTop: '10px',
        marginBottom: '10px'
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    headerIcons: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        minHeight: "30px"
    }
    , date: {
        width: '90%',
        fontSize: "1rem"
    },
    temp: {
        fontSize: "3.2rem",
        lineHeight: "1",
        fontFamily: 'MetaBold'
    },
    weatherIcon: {
        width: '40%',
        '& img': {
            width: '50%',
        }
    },
    openIcon: {
        marginLeft: '100px'
    },
    littleIcons: {
        width: '45%',
        textAlign: 'center',
        '& svg': {
            fontSize: '1.2rem',
            color: '#1b4de4',
            marginRight: '5px',
        }
    },
    iconOne: {
        marginBottom: '1rem'
    },
    bottomContent: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    bottomCard: {
        width: '90%',
        '& svg': {
            fontSize: '1.2rem',
            color: '#1b4de4',
            marginRight: '5px',
        }
    },
    LeftRight: {
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        padding: '5px',
    },
    iconTitle: {
        display: 'block'
    },
    tableRow: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            '& td': {
                paddingLeft: '0'
            }
        }

    }
}));


export { useStyles }