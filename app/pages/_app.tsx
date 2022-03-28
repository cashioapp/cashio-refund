import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-neutral-50">
      <div className="flex w-[700px] max-w-full flex-col items-center px-4">
        <Head>
          <title>Cashio Refund</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
        </Head>
        <div className="mt-5 flex flex-row items-center">
          <img src="/cashio.png" height="48px" width="48px" />
          <p className="ml-2 text-2xl">cashio.app refunds</p>
        </div>
        <Nav />
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
