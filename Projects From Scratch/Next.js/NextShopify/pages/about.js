import React from 'react';
import Container from '../components/layout/Container'
import PageTitle from '../components/ui/PageTitle'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    image: {
        width: '50%',
        float: 'right',
        margin: '0 0 15px 10px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            float: 'none',
            margin: '0 0 10px 0'
        }
    },
    title: {
        fontFamily: 'Cinzel Decorative, cursive, arial',
        fontWeight: 'bold',
    }

}));


function AboutPage(props) {
    const classes = useStyles();
    return (
        <Container margin='0' padding='2rem' width='100%' color='black' display='flex' flexDirection='column' justifyContent='flex-start' alignItems='center' background='#1d1d1d' >
            <PageTitle title='About' color='white' />
            <Container background='#fff' margin='1rem 0' >

                <Container width='100%' display='flex' flexDirection='column' padding='1rem'>
                    <Container width='100%'>
                        <p>
                            <img className={classes.image} src='https://images.unsplash.com/photo-1549298916-f52d724204b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=813&q=80' />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget velit vitae nisl lacinia fermentum. Suspendisse potenti. Praesent egestas nulla eu nulla elementum tempus. Etiam fringilla purus tincidunt, suscipit risus sit amet, egestas ligula.
                            Nullam id magna lobortis, dignissim ante sodales, euismod sem. Donec ut facilisis augue. Quisque porta arcu sed mauris porttitor pellentesque. Vivamus volutpat tristique dolor dapibus scelerisque. Fusce consequat nisi lectus, sed suscipit purus tempor ac.
                            Integer mauris velit, ultrices id auctor ac, ullamcorper ac felis. Morbi ultrices commodo libero, non posuere erat dignissim quis. Morbi tristique faucibus est vel sagittis. Quisque turpis arcu, eleifend in nisl eget, scelerisque iaculis ipsum.
                            Maecenas sem turpis, iaculis ullamcorper euismod ac, euismod imperdiet dui. Aliquam erat volutpat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget velit vitae nisl lacinia fermentum. Suspendisse potenti. Praesent egestas nulla eu nulla elementum tempus. Etiam fringilla purus tincidunt, suscipit risus sit amet, egestas ligula.
                            Nullam id magna lobortis, dignissim ante sodales, euismod sem. Donec ut facilisis augue. Quisque porta arcu sed mauris porttitor pellentesque. Vivamus volutpat tristique dolor dapibus scelerisque. Fusce consequat nisi lectus, sed suscipit purus tempor ac.
                            Integer mauris velit, ultrices id auctor ac, ullamcorper ac felis. Morbi ultrices commodo libero, non posuere erat dignissim quis. Morbi tristique faucibus est vel sagittis. Quisque turpis arcu, eleifend in nisl eget, scelerisque iaculis ipsum.
                            Maecenas sem turpis, iaculis ullamcorper euismod ac, euismod imperdiet dui. Aliquam erat volutpat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget velit vitae nisl lacinia fermentum. Suspendisse potenti. Praesent egestas nulla eu nulla elementum tempus. Etiam fringilla purus tincidunt, suscipit risus sit amet, egestas ligula.
                            Nullam id magna lobortis, dignissim ante sodales, euismod sem. Donec ut facilisis augue. Quisque porta arcu sed mauris porttitor pellentesque. Vivamus volutpat tristique dolor dapibus scelerisque. Fusce consequat nisi lectus, sed suscipit purus tempor ac.
                            Integer mauris velit, ultrices id auctor ac, ullamcorper ac felis. Morbi ultrices commodo libero, non posuere erat dignissim quis. Morbi tristique faucibus est vel sagittis. Quisque turpis arcu, eleifend in nisl eget, scelerisque iaculis ipsum.
                            Maecenas sem turpis, iaculis ullamcorper euismod ac, euismod imperdiet dui. Aliquam erat volutpat.
                        </p>
                    </Container>
                </Container >
            </Container >
        </Container >
    );
}

export default AboutPage;