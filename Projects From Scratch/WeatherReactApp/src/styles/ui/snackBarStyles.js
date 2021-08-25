import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    snackBar: {
        '& div.MuiPaper-root': {
            backgroundColor: '#1b4de4',
            fontSize: '1rem'
        }
    }
}));
export { useStyles }