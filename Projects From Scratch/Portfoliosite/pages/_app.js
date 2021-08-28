import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import { useEffect } from 'react'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import '../public/css/nprogress.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  NProgress.configure({
    minimum: 0.3,
    easing: 'ease',
    speed: 400,
    showSpinner: false,
  });


  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`)
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

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
