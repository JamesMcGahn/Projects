import React, { useState } from 'react';
import { client, gql } from '../../utils/appolloClient'
import ProductGrid from '../../components/sections/ProductGrid'
import { getProducts } from '../../utils/graphQLQueries'
import Container from '../../components/layout/Container'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
const useStyles = makeStyles((theme) => ({

}));



function ShopPage({ products, hasNext, cursor }) {
  const [productsList, setProductsList] = useState(products)
  const [itemCursor, setitemCursor] = useState(productsList[productsList.length - 1].cursor)
  const [hasMoreItems, setHasMoreItems] = useState(hasNext)
  const classes = useStyles()

  const getMoreItems = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/products/products`, {
        params: {
          id: itemCursor
        }
      })
      const { data } = res.data
      const newProducts = data.products
      const hasNext = data.hasNextPage
      setProductsList([...productsList, ...newProducts])
      setHasMoreItems(hasNext)
      setitemCursor(newProducts[newProducts.length - 1].cursor)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Container margin='0' padding='2rem' width='100%' color='black' display='flex' flexDirection='column' justifyContent='flex-start' alignItems='center' background='#1d1d1d' >
      <Container background='#fff'>
        <ProductGrid title="Shop" products={productsList} hasMoreItems={hasMoreItems} getMoreItems={getMoreItems} />
      </Container>
    </Container >
  );
}

export default ShopPage;

export async function getStaticProps(context) {
  const initalItems = getProducts(20)

  const { data } = await client.query({
    query: gql`${initalItems}`,
  });
  const products = data.products.edges
  const hasNext = data.products.pageInfo.hasNextPage
  return {
    props: { products: products, hasNext: hasNext },
  }
}