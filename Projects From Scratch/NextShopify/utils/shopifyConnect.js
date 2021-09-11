import Client from 'shopify-buy';

const client = Client.buildClient({
    storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_TOKEN,
    domain: process.env.NEXT_PUBLIC_SHOPIFY_URL,
});


export default client