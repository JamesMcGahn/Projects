import { makeStyles, alpha } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    tab: {
        borderRight: '1px solid',
        padding: 0,
        width: '5 rem',
        borderRightColor: alpha(theme.palette.common.white, 0.12),
        "& a": {
            display: 'block',
            color: 'white',
            textDecoration: "none",
            width: '100%',
            height: '100%',
            fontSize: '1rem',
            textTransform: 'none',
            fontFamily: 'Metabold'

        },
        "& img": {
            width: '10%',
        },
    },
    wrapper: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
    },

}));

const styles = makeStyles({
    warn: {
        '& svg': {
            color: 'yellow'
        }
    }
});


export { useStyles, styles }