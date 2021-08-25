import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    infoCard: {
        width: '50%',
        '@media (max-width: 650px)': {
            width: '90%',
        }
    },
    text: {
        fontSize: '1rem',
        marginLeft: '1rem'
    }
});

export { useStyles }