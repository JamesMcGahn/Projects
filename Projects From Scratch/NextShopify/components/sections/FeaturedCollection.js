import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '../layout/Container'

const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%",
    }
}));

function FeaturedCollection({ image, children, color }) {
    const classes = useStyles({ color });
    return (
        <Container xsFlexD='column' width='100%' minHeight='100%' color='black' display='flex'
            flexDirection='row' padding='.5rem' background={color} padding='2rem'>

            <Container width='40%' padding='2rem' xsWidth='100%' xsPadding='1rem'>
                <img className={classes.image} src={image} alt="featured-collection" />
            </Container>

            <Container width='60%'
                padding='5rem 3rem 5rem 3rem'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                xsWidth='100%'
                xsPadding='0'>

                {children}

            </Container>
        </Container >
    );
}

export default FeaturedCollection;