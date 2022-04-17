/* eslint-disable react/no-unknown-property */
import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'
// import '../styles/globals.css'


export default function Layout(props) {
    const { title, addClass } = props
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                    rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                    crossOrigin="anonymous" />
            </Head>
            <Navbar />
            <main>
                <div className={addClass ? addClass : `container`}>
                    {props.children}
                </div>
            </main>
            <Footer />
        </>
    )
}
