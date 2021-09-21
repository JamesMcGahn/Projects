import React, { useContext, useState, useEffect } from 'react'
import { ShopifyContext } from '../contexts/shopifyContext'
import Hero from '../components/ui/Hero'
import FeaturedItems from '../components/sections/FeaturedItems'
import FeaturedCollection from '../components/sections/FeaturedCollection'
import ShopByCollection from '../components/sections/ShopByCollection'
import { client, gql } from '../utils/appolloClient'
import { collectionByHandle } from '../utils/graphQLQueries'
import { makeStyles } from '@material-ui/core/styles';
import Container from '../components/layout/Container'

const useStyles = makeStyles((theme) => ({
  heroCont: {
    width: '100%',
    height: '75vh',
    padding: '2rem',
    outline: ' 4px solid black',
    outlineOffset: '-2rem',
    marginBottom: '2rem',
  },
}));

export default function Home({ products, }) {
  const { cart, setCart, collections } = useContext(ShopifyContext)
  const classes = useStyles();

  return (
    <Container display='flex' margin='0' padding='0' width='100%' color='black' flexDirection='column' justifyContent='flex-start' alignItems='center'>
      <div className={classes.heroCont}>
        <Hero image='https://assets.wordstream.com/s3fs-public/styles/simple_image/public/images/hero-image-food.jpg?GaIXC9DcxzJfdbOiCkhPs2bnIToTOtEq&itok=qZ04kL12' >
        </Hero>
      </div>
      <FeaturedItems products={products} />
      <FeaturedCollection color='#CBB682'
        image='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/464e8d65-3a82-472a-aa2c-de53b2dfe7f2/wearallday-shoe-XpS7nX.png'
        title='lorem ipsum dolor sit amet'
        pText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare est ut risus feugiat,
          eu rhoncus felis pulvinar. In interdum tellus massa, quis tincidunt felis eleifend ac.
          In tempor tellus sit amet nisl tempor bibendum. Ut ultrices dolor eget leo porta, id facilisis velit tempor.
          Curabitur nec luctus arcu, quis euismod leo. Proin ultricies mollis augue id dapibus.'
      />
      <ShopByCollection />
    </ Container >
  )
}

export async function getStaticProps(context) {
  const collection = collectionByHandle('home-page-featured')
  const { data } = await client.query({
    query: gql`${collection}`,
  });

  const products = data.collectionByHandle.products.edges
  return {
    props: { products: products },
  }
}