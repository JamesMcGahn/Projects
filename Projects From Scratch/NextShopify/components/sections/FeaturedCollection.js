import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '../layout/Container'
import MainButton from '../../components/ui/MainButton'
const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%",
    }
}));

function FeaturedCollection({ image, title, color, pText }) {
    const classes = useStyles({ color });
    return (
        <Container xsFlexD='column' width='100%' minHeight='100%' color='black' display='flex'
            flexDirection='row' background={color} padding='.5rem'>

            <Container width='40%' padding='2rem' xsWidth='100%' xsPadding='1rem' display='flex' alignItems='center'>
                <img className={classes.image} src={image} alt="featured-collection" />
            </Container>

            <Container width='60%'
                padding='5rem 3rem 5rem 3rem'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                xsWidth='100%'
                xsPadding='1rem'>
                <h3>{title}</h3>
                <p>{pText}</p>
                <MainButton backgroundColor='black' color='white' border='1px solid black'>Shop Now</MainButton>
            </Container>
        </Container >
    );
}

export default FeaturedCollection;