import React from 'react';
import { client, gql } from '../../../utils/appolloClient'
import { collectionByHandle, allCategories } from '../../../utils/graphQLQueries'
import ProductGrid from '../../../components/sections/ProductGrid';
import { useRouter } from 'next/router'
import DefaultErrorPage from 'next/error'
import Container from '../../../components/layout/Container'

function Collections({ notFound, collection, title }) {
    const router = useRouter()
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

    return (
        <Container margin='0' padding='2rem' width='100%' color='black' display='flex' flexDirection='column' justifyContent='flex-start' alignItems='center' background='#1d1d1d' >
            <Container background='#fff'>
                <ProductGrid title={title} products={collection} />
            </Container >
        </Container >
    );
}

export default Collections;


export async function getStaticPaths() {
    try {
        const allCats = allCategories()
        const categories = await client.query({
            query: gql`${allCats}`
        })
        const collectionsList = categories.data.collections.edges
        const collections = collectionsList.map(col => {
            return { handle: col.node.handle, title: col.node.title }
        }).filter(item => !item.title.toLowerCase().includes('home'))
        const paths = collections.map((col) => ({
            params: { id: col.handle },
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
        const collection = collectionByHandle(id)

        const { data } = await client.query({
            query: gql`${collection}`,
        });

        const products = data.collectionByHandle.products.edges
        const title = data.collectionByHandle.title


        return { props: { collection: products, title: title, notFound: false }, revalidate: 3600 }
    } catch (e) {
        return { props: { collection: [], title: '', notFound: true }, revalidate: 3600 }
    }
}
