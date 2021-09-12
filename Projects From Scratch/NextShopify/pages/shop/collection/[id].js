import React from 'react';
import { client, gql } from '../../../utils/appolloClient'
import { collectionByHandle, allCategories } from '../../../utils/graphQLQueries'
import ProductGrid from '../../../components/sections/ProductGrid';
function Collections({ collection, title }) {
    console.log(collection)
    return (
        <div>
            <ProductGrid title={title} products={collection} />
        </div>
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
    const id = context.params.id
    const collection = collectionByHandle(id)

    const { data } = await client.query({
        query: gql`${collection}`,
    });
    console.log(data)
    const products = data.collectionByHandle.products.edges
    const title = data.collectionByHandle.title
    console.log(products)

    return { props: { collection: products, title: title, notFound: false }, revalidate: 3600 }
}
