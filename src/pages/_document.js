import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
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
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />

          <title>Michkov Eugene | Portfolio</title>
          <meta name="title" content="Michkov Eugene | Portfolio" />
          <meta name="description" content="Founder of the INVINCIBLE WARRIORS COMPANY and the lead developer of Samurai Discord Bot" />
          <meta name="theme-color" content="#0F1624" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://michkoff.com/" />
          <meta property="og:title" content="Michkov Eugene | Portfolio" />
          <meta property="og:description" content="Founder of the INVINCIBLE WARRIORS COMPANY and the lead developer of Samurai Discord Bot" />
          <meta property="og:image" content="https://michkoff.com/images/embed_photo.jpg" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://michkoff.com/" />
          <meta property="twitter:title" content="Michkov Eugene | Portfolio" />
          <meta property="twitter:description" content="Founder of the INVINCIBLE WARRIORS COMPANY and the lead developer of Samurai Discord Bot" />
          <meta property="twitter:image" content="https://michkoff.com/images/embed_photo.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}