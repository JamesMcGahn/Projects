import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    todaysum: {
        width: '60%',
        marginBottom: '2rem',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            margin: 0,
        }
    },
    accTitle: {
        fontFamily: 'MetaBold',
        marginLeft: '7px'
    },
    accDetail: {
        backgroundColor: '#f1f1f1',
        width: '100%',
        padding: '10px',
        '& h6': {
            margin: 0
        },
        '& p': {
            margin: '10px 0 10px 0',
            fontSize: '1rem'
        }
    },
    warn: {
        '& svg': {
            color: '#e6731f'
        }
    }
}));
export { useStyles }