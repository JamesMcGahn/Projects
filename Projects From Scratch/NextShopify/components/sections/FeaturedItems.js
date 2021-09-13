import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MiniProductCard from '../cards/MiniProductCard'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ProductCarousel from '../ui/ProductCarousel'
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
    },
    title: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    slider: {
        width: '100%',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        '& svg': {
            color: 'black',
            fontSize: '2rem'
        },
        '& svg:hover': {
            background: 'black',
            color: 'white',
            cursor: 'pointer'
        }
    },
}));

function FeaturedItems({ products }) {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:548px)');
    const length = products.length
    const [maxDisplay, setMaxDisplay] = useState(3)
    const [current, setCurrent] = useState({
        min: 0,
        max: maxDisplay,
    })

    if (matches && maxDisplay !== 0) {
        setCurrent({ min: 0, max: 0 })
        setMaxDisplay(0)
    } else if (!matches && maxDisplay !== 3) {
        setCurrent({ min: 0, max: 3 })
        setMaxDisplay(3)
    }

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h2>Featured Items</h2>
            </div>
            <ProductCarousel current={current} setCurrent={setCurrent} data={products} maxDisplay={maxDisplay}>
                <MiniProductCard />
            </ProductCarousel>
        </div>
    );
}

export default FeaturedItems;