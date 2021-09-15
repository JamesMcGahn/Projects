import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    social: {
        width: '33.3%',
        '& svg': {
            marginLeft: '.5rem'
        }
    },
    message: {
        width: '33.3%',
        textAlign: 'center',
        '& p': {
            margin: 0
        }
    },
    nav: {
        width: '33.3%',
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 0,
        listStyle: 'none',
        '& li': {
            margin: ' 0 .5rem 0 .5rem'
        }
    }

}));

export { useStyles }
