import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import Layout from '../components/Layout'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>James McGahn</title>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )


}

export default MyApp
