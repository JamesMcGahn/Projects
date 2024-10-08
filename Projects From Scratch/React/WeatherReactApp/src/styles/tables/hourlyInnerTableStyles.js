import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {

        '& > *': {
            borderBottom: 'unset',
        },


    },
    checkCell: {
        width: '5rem',
        paddingLeft: '1rem',
    },
    icon: {
        width: '80%'
    },
    wind: {
        width: '20%',
    },
    expandCol: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        alignContent: "center",
        textAlign: "left",

    },
    faicon: {
        width: '15%',
        color: '#3f51b5',
        marginRight: '1rem',
        marginTop: "3px",

    },
    fatext: {
        width: '50%',
        marginBottom: '7px',
        "& span": {
            display: "block"
        }
    },
    favalue: {
        fontSize: '1rem',
        fontWeight: 'bold'
    },
    tableCell: {
        border: 0,
    },
    maintbCell: {
        borderBottom: '1px solid rgba(224, 224, 224, 1)',

    },
    smallCell: {
        width: '1rem',
    },
    tableRow: {
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            flexDirection: 'column',

        }

    }

}));

export { useStyles }