import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '../layout/Container'


const useStyles = makeStyles((theme) => ({
    itemImg: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    },
    title: {
        margin: '0',
        padding: '3px 0',
        fontSize: '1rem',
    },
    lineItem: {
        margin: '0',
        padding: '3px 0',
        fontSize: '.8rem'
    }
}));

function MiniProductCard({ item }) {
    const classes = useStyles();
    return (
        <Container height='inherit' display='flex' flexDirection='column' padding='0 .25rem' xsAlignItems='center'>
            <Container width='100%' height='100%' padding='0 1rem' >
                <img className={classes.itemImg} src={item.node.images.edges[0].node.originalSrc}
                    onMouseOver={e => (e.currentTarget.src = item.node.images?.edges[1].node.originalSrc ? item.node.images.edges[1].node.originalSrc : item.node.images.edges[0].node.originalSrc)}
                    onMouseOut={e => (e.currentTarget.src = item.node.images.edges[0].node.originalSrc)}
                />
            </Container>
            <Container height='100%' padding='0 1rem' display='flex' flexDirection='column' xsAlignItems='center'>
                <h6 className={classes.title}>{item.node.title}</h6>
                <p className={classes.lineItem}>{item.node.vendor}</p>
                <p className={classes.lineItem}>{item.node.priceRange.maxVariantPrice.amount === item.node.priceRange.minVariantPrice.amount ? `$` : `From: $`}{`${Number(item.node.priceRange.minVariantPrice.amount).toFixed(2)} USD`}</p>
            </Container>
        </Container>
    );
}

export default MiniProductCard;