import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    todaysum: {
        width: '60%',
        marginTop: '1rem',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        }
    },
    summaryCard: {
        width: '60%',
        marginTop: '1rem',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        }
    },

}));
export { useStyles };