import React from 'react';
import Container from '../layout/Container'

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        '& h4': {
            fontSize: '1.6rem'
        }
    },
    tileContainer: {
        margin: 0,
        padding: '0',
        width: '100%',
        color: 'black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexWrap: 'wrap',
    },
    tile: {
        width: props => `${(100 / props.length) - 2}%`,
        marginLeft: '.1rem',
        '& p': {
            fontWeight: 'bold',
        }
    },
    img: {
        '& img': {
            width: '100%',
        }

    }

}));



const createTiles = (title, img) => ({ title: title, img: img });

const tiles = [
    createTiles('Title 1', 'https://n.nordstrommedia.com/id/f477f59e-065c-456f-b8b2-80f6a950775a.jpeg?h=365&w=268'),
    createTiles('Title 1', 'https://n.nordstrommedia.com/id/f477f59e-065c-456f-b8b2-80f6a950775a.jpeg?h=365&w=268'),
    createTiles('Title 1', 'https://n.nordstrommedia.com/id/f477f59e-065c-456f-b8b2-80f6a950775a.jpeg?h=365&w=268'),
    createTiles('Title 1', 'https://n.nordstrommedia.com/id/f477f59e-065c-456f-b8b2-80f6a950775a.jpeg?h=365&w=268'),
]

function ShopbyCollection(props) {
    const length = tiles.length
    const classes = useStyles({ length });
    return (
        <Container width='100%' display='flex' flexDirection='column' justifyContent='flex-start' alignItems='center'>
            <h4>Shop by Collections</h4>
            <Container display='flex' margin='0' padding='0' width='100%' color='black' justifyContent='center' alignItems='center' flexWrap=' wrap'>
                {tiles.map((tile, key) => {
                    return (<div className={classes.tile} key={key}>
                        <div className={classes.img}>
                            <img src={`${tile.img}`} alt={`${tile.title}`} />
                        </div>
                        <p>{tile.title}</p>
                    </div>
                    )
                })}
            </Container>
        </Container >
    );
}

export default ShopbyCollection;