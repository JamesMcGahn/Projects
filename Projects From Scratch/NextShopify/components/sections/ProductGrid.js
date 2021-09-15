import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MiniProductCard from '../../components/cards/MiniProductCard'
import Link from 'next/link'
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

function ProductGrid({ products, title, hasMoreItems, getMoreItems, children }) {
    const classes = useStyles()
    return (
        <React.Fragment>
            <h1>{title}</h1>
            {children}
            <div className={classes.itemGrid}>
                {products.map((item, index) => {
                    return (
                        <div className={classes.item} key={index}>
                            <Link href={`/shop/product/${item.node.handle}`}>
                                <a>
                                    <MiniProductCard item={item} />
                                </a>
                            </Link>
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