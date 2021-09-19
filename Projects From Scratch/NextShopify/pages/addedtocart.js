import React, { useContext } from 'react'
import { ShopifyContext } from '../contexts/shopifyContext'
import { client, gql } from '../utils/appolloClient'
import { getProducts } from '../utils/graphQLQueries'
import ProductGrid from '../components/sections/ProductGrid'
import Container from '../components/layout/Container'
import MainButton from '../components/ui/MainButton'
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'


const useStyles = makeStyles((theme) => ({
    cartProductImage: {
        width: '100%',
    },
    lineItem: {
        display: 'block',
        '& h1': {
            fontSize: '1.2rem',
            margin: '0'
        },
        '& h2': {
            fontSize: '1.1rem'
        }
    }

}));




function addedToCart({ products }) {
    const { addedToCartItems } = useContext(ShopifyContext)
    const classes = useStyles();
    return (
        <Container flexDirection="column" width="100%" display='flex' justifyContent='center' padding="1rem">
            {addedToCartItems[0] ?
                <Container width="100%" justifyContent="center" display='flex' alignItems='center'>
                    <Container width="25%">
                        <img className={classes.cartProductImage} src={addedToCartItems[0].image} />
                    </Container>
                    <Container width='40%' display='flex' flexDirection='column' margin='0 0 1rem 2rem'>
                        <Container margin='0 0 1rem 0'>
                            <span className={classes.lineItem}> <h1>{`Added to Cart:`}</h1></span>
                            <span className={classes.lineItem}><h2>{`${addedToCartItems[0].title} `}</h2></span>
                            <span className={classes.lineItem}>{`Brand: ${addedToCartItems[0].vendor}`} </span>
                            <span className={classes.lineItem}>{`Style: ${addedToCartItems[0].variantTitle}`}</span>
                            <span className={classes.lineItem}>{`Total: $${Number(addedToCartItems[0].price).toFixed(2)}`}</span>
                        </Container>
                        <Container width='100%' display='flex' flexDirection='row' xsFlexD='column'>

                            <Container margin='0 0 10px 0'>
                                <MainButton backgroundColor='black' color='white' border='1px solid black' width='100%'>
                                    <Link href='/shop'>Go To Shop</Link>
                                </MainButton>
                            </Container>
                            <Container margin='0 0 10px 10px' xsMargin='0 0 0 0'>
                                <MainButton backgroundColor='black' color='white' border='1px solid black' width='100%'>
                                    <Link href='/cart'>Go To Cart</Link>
                                </MainButton>
                            </Container>
                        </Container>
                    </Container>
                </Container>
                : null
            }

            <ProductGrid title="Check Out More Items" products={products} hasMoreItems={false} getMoreItems={false} />
        </Container>
    );
}

export default addedToCart;


export async function getStaticProps(context) {
    const initalItems = getProducts(20)

    const { data } = await client.query({
        query: gql`${initalItems}`,
    });
    const products = data.products.edges
    return {
        props: { products: products },
    }
}