import Layout from '../components/layout/layout'
import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress color="#808080" />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
