import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    item: {
        height: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        padding: '0 .25rem',
    },
    itemImg: {
        width: '100%',
        height: '100%',
        padding: '0 1rem',
        '& img': {
            width: '80%',
        }
    },
    description: {
        height: '100%',
        padding: '0 1rem',
    }
}));

function MiniProductCard({ item }) {
    const classes = useStyles();
    return (
        <div className={classes.item}>
            <div className={classes.itemImg}  >
                <img src={item.node.images.edges[0].node.originalSrc}
                    onMouseOver={e => (e.currentTarget.src = item.node.images?.edges[1].node.originalSrc ? item.node.images.edges[1].node.originalSrc : item.node.images.edges[0].node.originalSrc)}
                    onMouseOut={e => (e.currentTarget.src = item.node.images.edges[0].node.originalSrc)}
                />
            </div>
            <div className={classes.description}>
                <h6>{item.node.title}</h6>
                <p>{item.node.vendor}</p>
                <p>{item.node.priceRange.maxVariantPrice.amount === item.node.priceRange.minVariantPrice.amount ? `$` : `From: $`}{`${item.node.priceRange.minVariantPrice.amount} USD`}</p>
            </div>
        </div>
    );
}

export default MiniProductCard;