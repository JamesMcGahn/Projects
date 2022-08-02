import { alpha, makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: '#039',
        color: 'white',
        '@media (max-width: 450px)': {
            height: '20vh'
        }
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        width: '100%',
        '@media (max-width: 650px)': {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: '1% 2%',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: '1px, 1px, 1px, 0',
        paddingLeft: `25%`,
        width: '100%',
        minWidth: '100%',
    },
    formControl: {
        margin: '.5rem',
        height: '2rem',
        minWidth: 60,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '@media (max-width: 650px)': {
            margin: '.5rem 0 0 0',
        },

    },
    iconCont: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '10%',
        margin: '.5rem 0 .5rem 0',
        '@media (max-width: 650px)': {
            flexDirection: 'row',
        }
    },
    logo: {
        width: '100%'
    },
    logoContainer: {
        width: '5%',
        '@media (max-width: 950px)': {
            width: '8%',
        },
        '@media (max-width: 650px)': {
            width: '20%',
        }
    },
    searchResults: {
        marginTop: '1px',
        marginLeft: '4%',
        backgroundColor: 'white',
        color: 'black',
        flexGrow: 1,
        width: '95%',
        borderRadius: '5px !important',
        boxShadow: '0 3px 20px rgb(0 0 0 / 0.5)'
    },
    searchContainer: {
        position: 'absolute',
        width: '18%',
        minWidth: '150px',
        top: '30%',
        left: '42%',
        zIndex: 10,
        '@media (max-width: 650px)': {
            top: '40%',
            left: '33%',
            minWidth: '185px',
        },
        '@media (max-width: 450px)': {
            top: '90%',
            left: '25%',
            minWidth: '225px',
        }
    },
    list: {
        '& div.MuiButtonBase-root:hover': {
            backgroundColor: '#113076',
            color: 'white',
        }
    },

}));

export { useStyles }
