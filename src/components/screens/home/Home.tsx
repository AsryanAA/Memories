import { FC } from 'react'
import Head from 'next/head'
import styles from './Home.module.scss'
import Layout from '@/components/layout/Layout'


const Home: FC = () => {
    return (
        <Layout>
            <Head>
                <title>HomePage</title>
            </Head>
            <div>
                <h1 className={styles.h1__color}>Welcome HomePage</h1>
            </div>
        </Layout>
    )
}

export default Home