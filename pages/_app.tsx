import type { AppProps } from "next/app"
import Layout from "../components/layout/layout"
import { Provider } from "react-redux"
import { store } from "../redux/store"
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Toaster />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Provider>
  )
}

export default MyApp
