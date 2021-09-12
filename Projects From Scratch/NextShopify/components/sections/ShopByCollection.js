import React from 'react';

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
    title: {
        margin: '0 .1rem',
        '& p': {
            fontWeight: 'bold',
        }
    }
}));



const createTiles = (title, img) => ({ title: title, img: img });

const tiles = [
    createTiles('Title 1', 'https://n.nordstrommedia.com/id/f477f59e-065c-456f-b8b2-80f6a950775a.jpeg?h=365&w=268'),
    createTiles('Title 1', 'https://n.nordstrommedia.com/id/f477f59e-065c-456f-b8b2-80f6a950775a.jpeg?h=365&w=268'),
    createTiles('Title 1', 'https://n.nordstrommedia.com/id/f477f59e-065c-456f-b8b2-80f6a950775a.jpeg?h=365&w=268'),
    createTiles('Title 1', 'https://n.nordstrommedia.com/id/f477f59e-065c-456f-b8b2-80f6a950775a.jpeg?h=365&w=268'),
    createTiles('Title 1', 'https://n.nordstrommedia.com/id/f477f59e-065c-456f-b8b2-80f6a950775a.jpeg?h=365&w=268'),
]

function ShopbyCollection(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <h4>Shop by Collections</h4>
            <div className={classes.tileContainer}>
                {tiles.map((tile, key) => {
                    return (<div className={classes.title} key={key}>
                        <img src={`${tile.img}`} alt={`${tile.title}`} />
                        <p>{tile.title}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ShopbyCollection;