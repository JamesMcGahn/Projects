import React, { useContext } from 'react'
import { ShopifyContext } from '../contexts/shopifyContext'
import { client, gql } from '../utils/appolloClient'
import { getProducts } from '../utils/graphQLQueries'
import ProductGrid from '../components/sections/ProductGrid'

function addedToCart({ products }) {
    const { addedToCartItem } = useContext(ShopifyContext)

    // id: selectedVariant.node.id,
    // image: product.images.edges[0].node.originalSrc,
    // title: product.title,
    // price: selectedVariant.node.priceV2.amount,
    // variantTitle: selectedVariant.node.title


    return (
        <div>
            {addedToCartItem ?
                <div>
                    <div>
                        <img src={addedToCartItem.image} />
                    </div>
                    <div>
                        <h1>{`${addedToCartItem.title} Added to Cart`}</h1>
                        <span>{`Brand: ${addedToCartItem.vendor}`} </span>
                        <span>{`Style: ${addedToCartItem.variantTitle}`}</span>
                        <span>{`Total: ${addedToCartItem.price}`}</span>
                    </div>
                </div>
                : null
            }



            <ProductGrid title="Check Out More Items" products={products} hasMoreItems={false} getMoreItems={false}>

            </ProductGrid>
        </div>
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