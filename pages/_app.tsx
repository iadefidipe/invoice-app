import type { AppProps } from "next/app"
import Layout from "../components/layout/layout"
import { Provider } from "react-redux"
import { store } from "../redux/store"
import { SessionProvider } from "next-auth/react"
import { AnimatePresence } from "framer-motion"
function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </Provider>
    </SessionProvider>

  )
}

export default MyApp
