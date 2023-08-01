import { SITE_URL } from '../utils/configs';

import { Metadata } from 'next'
import IntroPage from '../components/feature/IntroPage';

export const metadata: Metadata = {
  title: 'Tech Tim (@TechTim42) - Learn, Share and Grow',
  alternates: {
    canonical: SITE_URL,
  },
  description: "Learn, Share and Grow ❤️ -- Software Engineer | AWS Professional | Open Source Lover  --☘️ Be more productive, Better in communicating, Contribute more to community.",
}
//
// async function getIntro() {
//   const res = await fetch('https://...')
//   const posts = await res.json()
//   return posts
// }


const Home = async () => {
  // const recentPosts = await getIntro()
  return (
    <IntroPage/>
  )
}

export default Home
