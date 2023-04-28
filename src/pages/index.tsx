import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>HomePage</title>
            </Head>
            <div>
                <h1 className={styles.h1__color}>Welcome HomePage</h1>
            </div>
        </>
    )
}