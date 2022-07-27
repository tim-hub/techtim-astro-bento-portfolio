import type { NextPage } from 'next'
import Intro from '../components/feature/Intro';
import Head from 'next/head';
import { SITE_URL } from '../utils/configs';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Tech Tim (@TechTim42) - Learn, Share and Grow'}</title>
        <link rel="canonical" href={SITE_URL}/>
      </Head>
      <Intro/>
    </>
  )
}

export default Home
