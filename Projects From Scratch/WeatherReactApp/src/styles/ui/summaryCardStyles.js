import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        minHeight: '35vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    content: {
        minHeight: '80%',
        marginLeft: '15px',
        marginRight: '15px',
        '& h3': {
            fontSize: '1.25rem',
            marginTop: '10px'
        },

    },
    expandCol: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        alignContent: "center",
        textAlign: "left",
        width: props => `${100 / props.itemsLength}%`,
        borderRight: '1px solid rgba(224, 224, 224, 1)',
        [theme.breakpoints.down('sm')]: {
            width: props => `${100 / 1}%`,
            borderBottom: '1px solid rgba(224, 224, 224, 1)',
            borderRight: 'none',
        }


    },
    fatext: {
        marginBottom: '7px',
        textAlign: 'center',
        "& span": {
            display: "block"
        },
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            textAlign: props => props.textAlign,
            justifyContent: "center",
        }
    },
    title: {
        fontSize: '1.2rem',
        fontFamily: 'Metabold',
        [theme.breakpoints.down('sm')]: {
            width: '40%',
        }
    },
    favalue: {
        fontSize: '2.5rem',
        color: '#1b4de4',
        fontWeight: '800',
        [theme.breakpoints.down('sm')]: {
            width: props => `${100 / props.itemsLength}%`,
            fontSize: '2rem',
        }
    },
    tablecont: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '35px',
        marginBottom: '20px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }

    },
    button: {
        margin: '0 0 15px 15px',
    },
    icon: {
        width: '80%',
        [theme.breakpoints.down('sm')]: {
            width: '25%',
            fontSize: '2rem',
        }
    },
    bottomText: {
        fontSize: '.9rem',
        '& svg': {
            color: props => props.iconColor,
        },
        [theme.breakpoints.down('sm')]: {
            width: '25%',
            fontSize: '1rem',
            '& svg': {
                display: 'block'
            }
        }
    },
    valueSubtext: {
        fontSize: '1.2rem',
        color: '#1b4de4',
        fontWeight: '800',
        marginTop: 0,
        lineHeight: '0.5', [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
            marginLeft: '6px',
        }
    }
}))

export { useStyles }