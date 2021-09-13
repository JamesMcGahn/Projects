import React, { useState } from 'react';
import { client, gql } from '../../../utils/appolloClient'
import { firstHundredProductHandles, productByHandle } from '../../../utils/graphQLQueries'
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
        width: '65%'
    }
}));

const CarouselImg = ({ item }) => {
    const src = item?.node.originalSrc
    const alt = item?.node.altText
    return (<div>
        <img src={src} alt={alt} />
    </div>
    )
}


function SingleProduct({ product, notFound }) {
    const router = useRouter()
    console.log(product)
    const classes = useStyles()
    if (notFound) {
        return (<>
            <head>
                <meta name="robots" content="noindex" />
            </head>
            <DefaultErrorPage statusCode={404} />
        </>)
    }
    const [maxDisplay, setMaxDisplay] = useState(2)
    const [current, setCurrent] = useState({
        min: 0,
        max: maxDisplay,
    })

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div className={classes.container}>
            <div className={classes.left}><ImageFeaturedCarousel data={product.images.edges}></ImageFeaturedCarousel></div>
            <div className={classes.right}><h1>{product.title}</h1></div>


        </div>
    );
}

export default SingleProduct;


export async function getStaticPaths() {
    try {
        const productHandlesQuery = firstHundredProductHandles()
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
