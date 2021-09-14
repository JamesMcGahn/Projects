import React, { useState, useContext, useEffect } from 'react';
import { ShopifyContext } from '../../../contexts/shopifyContext'
import { client, gql } from '../../../utils/appolloClient'
import { getProductHandles, productByHandle } from '../../../utils/graphQLQueries'
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router'
import ImageFeaturedCarousel from '../../../components/ui/ImageFeaturedCarousel'

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 0,
        padding: '0 2rem',
        width: '100%',
        color: 'black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    left: {
        width: '45%'
    },
    right: {
        width: '65%',
        display: 'flex',
        flexDirection: 'column',
    }
}));



function SingleProduct({ product, notFound }) {
    const router = useRouter()
    console.log(product)
    const classes = useStyles()

    if (router.isFallback) {
        return <div>Loading...</div>
    }
    if (notFound) {
        return (<>
            <head>
                <meta name="robots" content="noindex" />
            </head>
            <DefaultErrorPage statusCode={404} />
        </>)
    }
    const { setAddedToCartItem } = useContext(ShopifyContext)
    const [maxDisplay, setMaxDisplay] = useState(2)
    const [current, setCurrent] = useState({
        min: 0,
        max: maxDisplay,
    })
    const [variants, setVariants] = useState(product.variants.edges)
    const [selectedVariant, setSelectedVariant] = useState()
    const [error, setError] = useState(false)
    const minPrice = product.priceRange.minVariantPrice.amount
    const maxPrice = product.priceRange.maxVariantPrice.amount

    const handleVariantClick = (id) => {
        console.log('click')
        const selected = variants.filter(variant => variant.node.id === id)
        setSelectedVariant(selected[0])
    }

    const handleAddToCart = () => {

        if (!selectedVariant) return setError(true)
        const item = {
            id: selectedVariant.node.id,
            vendor: product.vendor,
            image: product.images.edges[0].node.originalSrc,
            title: product.title,
            price: selectedVariant.node.priceV2.amount,
            variantTitle: selectedVariant.node.title
        }
        setAddedToCartItem(item)
        router.push('/addedtocart')
    }

    useEffect(() => {
        if (variants.length === 1) {
            setSelectedVariant(variants[0])
        }
    }, [])


    return (
        <div className={classes.container}>
            <div className={classes.left}><ImageFeaturedCarousel data={product.images.edges}></ImageFeaturedCarousel></div>
            <div className={classes.right}>
                <h1 className={classes.title}>{product.title}</h1>
                <h2 className={classes.vendor}>{product.vendor}</h2>
                <p>{product.description}</p>
                <div>
                    {!selectedVariant ?
                        minPrice === maxPrice ? `$ ${maxPrice}` : `From $${minPrice}-$${maxPrice}`
                        :
                        <div>
                            <span>{`$${selectedVariant.node.priceV2.amount}`}</span>
                            <span>{`${selectedVariant.node.sku}`}</span>
                        </div>
                    }
                </div>
                <div>
                    {variants.map(variant => {
                        return (
                            <button onClick={() => handleVariantClick(variant.node.id)} disabled={variant.node.availableForSale ? false : true}>
                                {variant.node.title}
                            </button>
                        )
                    })}
                </div>
                {error && <div>Make Sure to Select a Variant.</div>}
                <button onClick={handleAddToCart} >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default SingleProduct;


export async function getStaticPaths() {
    try {
        const productHandlesQuery = getProductHandles(100)
        const { data } = await client.query({
            query: gql`${productHandlesQuery}`
        })
        const productList = data.products.edges
        const paths = productList.map((prod) => ({
            params: { id: prod.node.handle },
        }))
        return { paths, fallback: true, }
    } catch (e) {
        const paths = []
        return { paths, fallback: true, }
    }
}

export async function getStaticProps(context) {
    try {
        const id = context.params.id
        const prodByHandleQuery = productByHandle(id)
        const { data } = await client.query({
            query: gql`${prodByHandleQuery}`,
        });
        const product = data.productByHandle
        return { props: { product: product, notFound: false }, revalidate: 3600 }
    } catch {
        return { props: { product: [], notFound: true }, revalidate: 3600 }
    }

}
