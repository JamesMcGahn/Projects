
import styles from '../styles/Home.module.css'
import { useContext, useState } from 'react'
import { ShopifyContext } from '../contexts/shopifyContext'
import client from '../utils/shopifyConnect'

export default function Home({ products }) {
  const { cart, setCart } = useContext(ShopifyContext)
  // const initial = JSON.parse(products)
  // const [prodos, setProducts] = useState(initial)


  return (
    <div className={styles.container}>
      <h1> {`hi`}</h1>

    </div>
  )
}


// export async function getStaticProps(context) {
//   const res = await client.product.fetchAll()
//   console.log(res)
//   const products = JSON.stringify(res)

//   return {
//     props: { products: products },
//   }
// }