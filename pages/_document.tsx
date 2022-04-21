import Document, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <meta name='theme-color' content='#888eb0' />
          <meta name='twitter:card' content='summary' key='twcard' />
          <meta name='twitter:creator' content='invoice-app' key='twhandle' />
          <meta
            property='og:url'
            content='https://invoice-app-crud.vercel.app/'
            key='ogurl'
          />
          <meta
            property='og:image'
            content='https://invoice-app-crud.vercel.app/preview.jpg'
            key='ogimage'
          />
          <meta
            property='og:site_name'
            content='invoice-app'
            key='ogsitename'
          />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
          

          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Spartan:wght@400;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
