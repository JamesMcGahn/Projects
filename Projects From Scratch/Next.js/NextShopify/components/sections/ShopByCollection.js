import React from 'react';
import Container from '../layout/Container'
import PageTitle from '../ui/PageTitle'
import { makeStyles } from '@material-ui/core/styles';
import { tiles } from '../../constants'
import Link from 'next/link'
const useStyles = makeStyles((theme) => ({
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
        padding: '1.5rem',
        marginLeft: '.5rem',
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




function ShopbyCollection(props) {
    const catTiles = tiles
    const length = catTiles.length
    const classes = useStyles({ length });
    return (
        <Container width='100%' display='flex' flexDirection='column' justifyContent='flex-start' alignItems='center' margin='2rem 0'>
            <PageTitle title='Shop by Collections' href='/shop/collections' />
            <Container display='flex' flexDirection='row' margin='2rem 0' padding='0' width='100%' color='black' justifyContent='center' alignItems='center' flexWrap='wrap'>
                {catTiles.map((tile, key) => {
                    return (

                        <div className={classes.tile} key={key}>
                            <Link href={`/shop/collections/${tile.handle}`}>
                                <a>
                                    <div className={classes.img}>
                                        <img src={`${tile.img}`} alt={`${tile.title}`} />
                                    </div>
                                </a>
                            </Link>
                        </div>

                    )
                })}
            </Container>
        </Container >
    );
}

export default ShopbyCollection;