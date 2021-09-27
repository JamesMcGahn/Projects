import React, { useContext, useState, useEffect } from 'react'
import { ShopifyContext } from '../contexts/shopifyContext'
import { UserContext } from '../contexts/userContext'
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
    marginBottom: '2rem',
    backgroundColor: '#1d1d1d'
  },
  history: {
    maxHeight: '200px'
  }
}));

export default function Home({ products, }) {
  const classes = useStyles();
  const { history } = useContext(UserContext)
  return (
    <Container display='flex' margin='0' padding='0' width='100%' color='black' flexDirection='column' justifyContent='flex-start' alignItems='center'>
      <div className={classes.heroCont}>
        <Hero image='/images/halfpipe.jpeg' >
        </Hero>
      </div>
      <FeaturedItems data={products} title='Featured Items' />
      <FeaturedCollection color='#CBB682'
        image='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/464e8d65-3a82-472a-aa2c-de53b2dfe7f2/wearallday-shoe-XpS7nX.png'
        title='lorem ipsum dolor sit amet'
        pText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare est ut risus feugiat,
          eu rhoncus felis pulvinar. In interdum tellus massa, quis tincidunt felis eleifend ac.
          In tempor tellus sit amet nisl tempor bibendum. Ut ultrices dolor eget leo porta, id facilisis velit tempor.
          Curabitur nec luctus arcu, quis euismod leo. Proin ultricies mollis augue id dapibus.'
        href='/shop/collections/nike'
      />
      <ShopByCollection />
      {history?.length > 3 ?

        <FeaturedItems data={history} title='Recent Browsing History' />

        : null
      }
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