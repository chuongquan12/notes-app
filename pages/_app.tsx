import '../styles/globals.scss'
import '../styles/notes.scss'
import '../styles/auth.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Head>
                <title>Next App Demo</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </RecoilRoot>
    )
}

export default MyApp
