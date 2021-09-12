import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    gql
} from "@apollo/client";
import { setContext } from 'apollo-link-context';

const httpLink = createHttpLink({ uri: `https://${process.env.NEXT_PUBLIC_SHOPIFY_URL}.myshopify.com/api/2021-07/graphql.json` })
const middlewareLink = setContext(() => ({
    headers: {
        'X-Shopify-Storefront-Access-Token': `${process.env.NEXT_PUBLIC_SHOPIFY_TOKEN}`
    }
}))

const client = new ApolloClient({
    link: middlewareLink.concat(httpLink),
    cache: new InMemoryCache(),
})

export { client, gql }

