import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MiniProductCard from '../cards/MiniProductCard'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '../layout/Container'
import ProductCarousel from '../ui/ProductCarousel'
const useStyles = makeStyles((theme) => ({

}));

function FeaturedItems({ data, title }) {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:550px)');
    const smMatches = useMediaQuery('(max-width:720px)');
    const [maxDisplay, setMaxDisplay] = useState(3)
    const [current, setCurrent] = useState({
        min: 0,
        max: maxDisplay,
    })

    if (matches && maxDisplay !== 0) {
        setCurrent({ min: 0, max: 0 })
        setMaxDisplay(0)
    } else if (!matches && smMatches && maxDisplay !== 1) {
        setCurrent({ min: 0, max: 1 })
        setMaxDisplay(1)
    } else if (!matches && !smMatches && maxDisplay !== 3) {
        setCurrent({ min: 0, max: 3 })
        setMaxDisplay(3)
    }

    return (
        <Container display='flex' flexDirection='column' height='100%' justifyContent='center' margin="0 0 2rem 0">
            <Container width='100%' display='flex' flexDirection='row' alignItems='center' justifyContent='center'>
                <h2>{title}</h2>
            </Container>
            <ProductCarousel current={current} setCurrent={setCurrent} data={data} maxDisplay={maxDisplay} smMatches={smMatches} matches={matches}>
                <MiniProductCard />
            </ProductCarousel>
        </Container>
    );
}

export default FeaturedItems;