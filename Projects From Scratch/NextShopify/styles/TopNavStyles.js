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

    listCol: {
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        justifyContent: 'flex-start',
        listStyle: 'none',
        '& li': {
            margin: '.2rem 0'
        }
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
    },
    expandedMenu: {
        position: 'absolute',
        width: '20%',
        maxHeight: '100px',
        zIndex: 10,
        top: '7%',
        left: '70%',
        padding: '10px',
        border: '1px solid grey',
        backgroundColor: 'white',
        display: 'flex',
    },

}));

export { useStyles }
