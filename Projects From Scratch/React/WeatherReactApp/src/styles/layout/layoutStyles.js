import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#1a357c",
        backgroundImage: 'linear-gradient(#1a357c 9%,#99479b)',
        height: '100%',
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
    }
}));

export { useStyles }