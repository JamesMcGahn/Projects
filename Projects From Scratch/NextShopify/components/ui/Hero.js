import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    hero: {
        width: '100%',
        minHeight: '100%',
        color: 'black',
        display: 'flex',
        padding: '.5rem',
        backgroundImage: props => props.heroImage,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
    },
}));
function Hero({ image, children }) {
    const heroImage = `url('${image}')`
    const classes = useStyles({ heroImage });
    return (
        <div className={classes.hero}>
            {children}
        </div>
    );
}

export default Hero;