import React, { useState, useContext, useEffect } from 'react';
import { ShopifyContext } from '../../../contexts/shopifyContext'
import { UserContext } from '../../../contexts/userContext'
import { client, gql } from '../../../utils/appolloClient'
import { getProductHandles, productByHandle } from '../../../utils/graphQLQueries'
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router'
import ImageFeaturedCarousel from '../../../components/ui/ImageFeaturedCarousel'
import DefaultErrorPage from 'next/error'
import Container from '../../../components/layout/Container'
import MainButton from '../../../components/ui/MainButton'
import MainBadge from '../../../components/ui/MainBadge'
import Loading from '../../../components/ui/Loading'

const useStyles = makeStyles((theme) => ({
    title: {
        marginBottom: '1px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.4rem',
        }
    },
    vendor: {
        margin: '5px 0 0 0',
        fontSize: '1.2rem',
    },
    itemInfo: {
        fontSize: '1.2rem',
    }
}));

function SingleProduct({ product, notFound, id }) {
    const router = useRouter()
    const classes = useStyles()
    const { addedToCartItems, setAddedToCartItems, addToCart, } = useContext(ShopifyContext)
    const { saveCustomerHistory, addToWishList, user } = useContext(UserContext)
    const [maxDisplay, setMaxDisplay] = useState(2)
    const [current, setCurrent] = useState({
        min: 0,
        max: maxDisplay,
    })
    const [variants, setVariants] = useState(product?.variants.edges ? product.variants.edges : null)
    const [selectedVariant, setSelectedVariant] = useState()
    const [error, setError] = useState(false)
    const minPrice = product?.priceRange.minVariantPrice.amount
    const maxPrice = product?.priceRange.maxVariantPrice.amount

    useEffect(() => {
        if (product) {
            const productSummary = {
                node: {
                    handle: id,
                    title: product.title,
                    images: product.images,
                    vendor: product.vendor,
                    priceRange: product.priceRange
                }
            }
            saveCustomerHistory(productSummary)
        }
        if (variants?.length === 1) {
            setSelectedVariant(variants[0])
        }

    }, [])

    useEffect(() => {
        if (error) {
            setTimeout(() => setError(false), 3000)
        }
    }, [error])





    if (router.isFallback) {
        return <Loading />
    }
    // TODO: Not Found Page - 
    if (notFound || !product) {
        return (<>
            <head>
                <meta name="robots" content="noindex" />
            </head>
            <DefaultErrorPage statusCode={404} />
        </>)
    }



    const handleVariantClick = (id) => {
        const selected = variants.filter(variant => variant.node.id === id)
        setSelectedVariant(...selected)
    }

    const handleAdd = (method) => {

        if (!selectedVariant) return setError(true)
        const item = {
            productId: product.id,
            id: selectedVariant.node.id,
            vendor: product.vendor,
            image: product.images.edges[0].node.originalSrc,
            title: product.title,
            price: selectedVariant.node.priceV2.amount,
            variantTitle: selectedVariant.node.title,
            quantity: 1
        }

        if (method === 'addtocart') {
            setAddedToCartItems([item, ...addedToCartItems])
            addToCart(item.id, item.quantity)
            router.push('/addedtocart')
        }
        else if (method === 'addtowishlist') {
            addToWishList(item)
            router.push('/account/wishlist')
        }
    }







    return (
        <Container smFlexD='column' display='flex' margin='0' padding='1rem 2rem' width='100%' color='black' justifyContent='center' alignItems='flex-start'>

            <Container width='45%' mdWidth='100%' margin='0 1rem 0 0'>
                <ImageFeaturedCarousel data={product.images.edges}></ImageFeaturedCarousel>
                <Container xsWidth='100%' margin='1.5rem 0 10px 0'>
                    <MainButton color='white' backgroundColor='black' width='30%' hoverColor='white' onClick={() => router.back()} >
                        Go Back
                    </MainButton>
                </Container>
            </Container>
            <Container width='45%' mdWidth='100%' display='flex' flexDirection='column' >
                <Container>
                    <h1 className={classes.title}>{product.title}</h1>
                    <h2 className={classes.vendor}>{product.vendor}</h2>
                </Container>

                <Container margin='2rem 0 1rem 0' width='100%' display='flex' >
                    <Container mdWidth='100%'>{product.description}</Container>
                </Container>
                <Container display='flex' flexDirection='row' flexWrap='wrap' margin='1rem 0 1rem 0' width='100%' >
                    {
                        variants.map(variant => {
                            const selected = variant.node.id === selectedVariant?.node.id
                            const isAvailable = variant.node.availableForSale
                            return (
                                <Container margin='0 0 5px 3px' key={variant.node.id}>
                                    <MainBadge color={selected ? '#A08C5B' : 'white'} border={isAvailable ? selected ? '1px solid #A08C5B' : null : '1px solid gray'}
                                        backgroundColor={isAvailable ? 'black' : 'gray'} hoverBackgroundColor={isAvailable ? null : 'gray'}
                                        hoverBorder='1px solid gray'
                                        onClick={() => handleVariantClick(variant.node.id)} disabled={isAvailable ? false : true} key={variant.node.title}>
                                        {variant.node.title}
                                    </MainBadge>
                                </Container>
                            )
                        })
                    }
                </Container>
                <Container display='flex' flexDirection='row' flexWrap='wrap' margin='1rem 0 1rem 0' width='100%' >
                    {!selectedVariant ?
                        <span className={classes.itemInfo}>{minPrice === maxPrice ? `Price: $ ${Number(maxPrice).toFixed(2)}` : `From $${Number(minPrice).toFixed(2)}-$${Number(maxPrice).toFixed(2)}`}</span>
                        :
                        <Container>
                            <Container>
                                <span className={classes.itemInfo}>{`Price: $${Number(selectedVariant.node.priceV2.amount).toFixed(2)}`}</span>
                            </Container>
                            <Container margin='10px 0 0 0'>
                                <span className={classes.itemInfo}>{`SKU: ${selectedVariant.node.sku}`}</span>
                            </Container>
                        </Container>
                    }
                </Container>


                {error && <div>Make Sure to Select a Variant Before Adding To Cart</div>}

                <Container display='flex' flexDirection='row' width='100%' margin='1rem 0' justifyContent='space-around'>
                    {user ? <Container width='40%'>
                        <MainButton color='black' backgroundColor='#A08C5B' width='100%' hoverColor='white' onClick={() => handleAdd('addtowishlist')} >
                            Add to Wish List
                        </MainButton>
                    </Container>
                        : null}
                    <Container width='40%'>
                        <MainButton color='black' backgroundColor='#A08C5B' width='100%' hoverColor='white' onClick={() => handleAdd('addtocart')} >
                            Add to Cart
                        </MainButton>
                    </Container>
                </Container>
            </Container>
        </Container>
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
        return { props: { product: product, id: id, notFound: false }, revalidate: 3600 }
    } catch {
        return { props: { product: false, notFound: true }, revalidate: 3600 }
    }

}
