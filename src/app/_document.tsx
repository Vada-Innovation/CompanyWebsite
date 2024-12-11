import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="An company profile of Vada Innovation Company. Its company that serve for Application Development (Mobile, Web), UI UX Design & Maintenance"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="tags"
          content="web,app,ui,maintenance,company,Vada Innovation,profile"
        />
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
