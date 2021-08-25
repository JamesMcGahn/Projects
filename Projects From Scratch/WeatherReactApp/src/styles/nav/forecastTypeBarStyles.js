import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'theme.palette.background.paper',
    },
    tab: {
        "& a": {
            display: 'block',
            textDecoration: "none",
            height: '100%',
            fontSize: '1.1rem',
            fontFamily: 'Metabold',
            textTransform: 'none',
            color: 'white'
        },
    },
    tabDiv: {
        backgroundColor: '#113076',
        "& button": {
            minWidth: '16.66%',
        },
        '@media (max-width: 650px)': {
            "& div.MuiTabs-flexContainer": {
                flexDirection: "column",
                alignItems: "center"
            },
            "& div.MuiCollapse-wrapperInner": {
                display: "flex",
                flexDirection: "column"
            }
        }
    },
    indicator: {
        backgroundColor: 'white'
    }
    ,
    hidden: {
        display: 'none'
    },
    menuDiv: {
        minWidth: '245px'
    },
    menuText: {
        display: 'block',
        textDecoration: "none",
        height: '100%',
        fontSize: '1.1rem',
        fontFamily: 'Metabold',
        textTransform: 'none',
        color: 'white'
    },
    menuItem: {
        marginTop: 0,
        '& :hover': {
            color: '#113076'
        },
        '& a': {
            display: 'block',
            textDecoration: "none",
            height: '100%',
            fontSize: '1.1rem',
            fontFamily: 'Meta',
            textTransform: 'none',
            color: 'black',
        }
    },
    menuSubTitle: {
        margin: '5px 0 0 10px',
        fontSize: '1.2rem',
        fontFamily: 'MetaBold',
    }
    ,
    mobileNav: {
        backgroundColor: '#113076',
        textAlign: 'center',
        '& svg': {
            color: 'white'
        }
    }

}));

export { useStyles }