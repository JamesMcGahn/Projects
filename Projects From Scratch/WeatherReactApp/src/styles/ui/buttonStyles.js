import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(({
    root: {
        backgroundColor: props => props.backgroundColor,
        '&:hover': {
            backgroundColor: '#039',
        }

    },
    text: {
        textTransform: 'none',

        '& a': {
            color: 'white',
            textDecoration: 'none',
            fontFamily: 'Metabold'
        }
    }
}))

export { useStyles }