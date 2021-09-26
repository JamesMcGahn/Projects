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
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    nav: {
        width: '33.3%',
    },

    listCol: {
        display: 'flex',
        flexDirection: 'row',
        margin: 0,
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        listStyle: 'none',
        '& li': {
            margin: '.2rem 0',
            width: '33.3%',
        }
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: '0 2% 0 0',
        listStyle: 'none',
        '& li': {
            margin: ' 0 .5rem 0 .5rem'
        }
    },
    expandedMenu: {
        position: 'absolute',
        width: '30%',
        maxHeight: '200px',
        zIndex: 10,
        top: '9.1%',
        left: '70%',
        padding: '20px',
        border: '1px solid grey',
        backgroundColor: 'white',
        display: 'flex',
        boxShadow: '-3px 3px 5px rgba(0,0,0, 0.4)',
        animation: 'fadeIn 0.3s ease-in',
    },
    '@global': {
        "@keyframes fadeIn": {
            from: {
                opacity: 0
            },
            to: {
                opacity: 1,
            }
        },
    },
    accountDivName: {
        fontSize: '.8rem',
        margin: '0 0 0 0'
    },
    accountDivItem: {
        display: 'block'
    },
    AccountInnerDiv: {
        margin: '0 0 0 0',
        display: 'flex',
        alignItems: 'center',
    }
}));

export { useStyles }
