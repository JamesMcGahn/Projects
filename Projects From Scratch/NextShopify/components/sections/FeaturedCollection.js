import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        minHeight: '100%',
        color: 'black',
        display: 'flex',
        flexDirection: 'row',
        padding: '.5rem',
        backgroundColor: props => props.color,
        padding: '2rem'
    },
    image: {
        width: '40%',
        padding: '2rem',
        '& img': {
            width: '100%',
        }
    },
    description: {
        width: '60%',
        padding: '5rem 3rem 5rem 3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

function FeaturedCollection({ image, children, color }) {
    const classes = useStyles({ color });
    return (
        <div className={classes.container}>
            <div className={classes.image}>
                <img src={image} alt="featured-collection" />
            </div>
            <div className={classes.description}>
                {children}
            </div>
        </div>
    );
}

export default FeaturedCollection;