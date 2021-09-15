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
    }
}));




function addedToCart({ products }) {
    const { addedToCartItems } = useContext(ShopifyContext)
    const classes = useStyles();
    return (
        <Container flexDirection="column" width="100%">
            {addedToCartItems[0] ?
                <Container width="100%" justifyContent="center">
                    <Container width="25%">
                        <img className={classes.cartProductImage} src={addedToCartItems[0].image} />
                    </Container>
                    <div>
                        <h1>Added to Cart:</h1>
                        <h2>{`${addedToCartItems[0].title} `}</h2>
                        <span>{`Brand: ${addedToCartItems[0].vendor}`} </span>
                        <span>{`Style: ${addedToCartItems[0].variantTitle}`}</span>
                        <span>{`Total: ${addedToCartItems[0].price}`}</span>
                        <MainButton backgroundColor='black' color='white' border='1px solid black'>
                            <Link href='/shop'>Continue Shopping</Link>
                        </MainButton>
                        <MainButton backgroundColor='black' color='white' border='1px solid black'>
                            <Link href='/cart'>Go To Cart</Link>
                        </MainButton>
                    </div>
                </Container>
                : null
            }



            <ProductGrid title="Check Out More Items" products={products} hasMoreItems={false} getMoreItems={false}>

            </ProductGrid>
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