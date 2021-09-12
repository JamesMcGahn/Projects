import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MiniProductCard from '../../components/cards/MiniProductCard'
const useStyles = makeStyles((theme) => ({
    itemGrid: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    },
    item: {
        width: '25%',
        padding: '1rem',
    }
}));

function ProductGrid({ products, title, hasMoreItems, getMoreItems }) {
    const classes = useStyles()
    return (
        <React.Fragment>
            <h1>{title}</h1>
            <div className={classes.itemGrid}>
                {products.map((item, index) => {
                    return (
                        <div className={classes.item} key={index}>
                            <MiniProductCard item={item} />
                        </div>
                    )
                }
                )
                }

            </div>
            {hasMoreItems ? <button onClick={() => getMoreItems()}>Load More</button> : null}
        </React.Fragment>
    );
}

export default ProductGrid;