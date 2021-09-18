import React, { useState } from 'react';
import { client, gql } from '../../utils/appolloClient'
import ProductGrid from '../../components/sections/ProductGrid'
import { getProducts } from '../../utils/graphQLQueries'
import Container from '../../components/layout/Container'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  container: {

  },
  itemGrid: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  item: {
    width: '25%',
    padding: '1rem',
  }
}));



function ShopPage({ products, hasNext, cursor }) {
  const [productsList, setProductsList] = useState(products)
  const [itemCursor, setitemCursor] = useState(productsList[productsList.length - 1].cursor)
  const [hasMoreItems, setHasMoreItems] = useState(hasNext)
  const classes = useStyles()


  console.log(itemCursor)
  const loadMore = `
query {
    products(first: 20, after: "${itemCursor}"){
    pageInfo{
      hasNextPage
      hasPreviousPage
    }
      edges {
        cursor
        node{
          id
          title
          handle
          vendor
          productType
                priceRange {
            minVariantPrice{
              amount
            }
            maxVariantPrice{
              amount
            }
          }
          images(first: 2){
            edges{
              node{
                originalSrc
              }
            }
          }
        }
      }
    }
  }   
`

  const getMoreItems = async () => {
    const { data } = await client.query({
      query: gql`${loadMore}`,
    });
    const newProducts = data.products.edges
    const moreToLoad = data.products.pageInfo.hasNextPage

    setProductsList([...productsList, ...newProducts])
    setHasMoreItems(moreToLoad)
    setitemCursor(newProducts[newProducts.length - 1].cursor)
  }


  return (
    <Container margin='0' padding='1rem' width='100%' color='black' display='flex' flexDirection='column' justifyContent='flex-start' alignItems='center' >
      <ProductGrid title="Shop" products={productsList} hasMoreItems={hasMoreItems} getMoreItems={getMoreItems} />
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