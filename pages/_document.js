// @flow
import * as React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

type Context = {
  asPath: string, // String of the actual path (including the query) shows in the browser
  err: Object, // Error object if any error is encountered during the rendering
  jsonPageRes: Object, // Fetch Response object (client only)
  pathname: string, // path section of URL
  query: Object, // query string section of URL parsed as an object
  renderPage: void => Object, // a callback that executes the actual React rendering logic (synchronously)
  req: Object, // HTTP request object (server only)
  res: Object, // HTTP response object (server only)
};

export default class extends Document {
  static getInitialProps({ renderPage, req }: Context) {
    const { html, head, errorHtml, chunks } = renderPage()
    return { html, head, errorHtml, chunks, req }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link href="https://cdn.polyfill.io" rel="dns-prefetch" />
          <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
        </Head>
        <body>
          <Main />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default-3.6" />
          <NextScript />
        </body>
      </html>
    )
  }
}
