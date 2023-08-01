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

async function getIntro() {
  const url = process?.env?.CMS_URL || 'http://localhost:1337'


  const res = await fetch(
    `${url}/api/intro-contexts/1?populate=socials,sections`,
    {
      next: { revalidate: 1000*60*60*24*7 }, // revalidating data every week // with this it is incremetal static regeneration
      method: "GET",
      headers: {
        "Authorization": `Bearer ${process?.env?.CMS_API_TOKEN}`,
        "Content-Type": "application/json",
        'Host': SITE_URL,
      }
    }
  )


  if (res.status !== 200) {
    console.error('Failed to fetch intro', res.status, res.statusText)
    return
  }

  const data = (await res.json()).data
  return data.attributes
}


const Home = async () => {

  const intro = await getIntro()
  return (
    <IntroPage intro={intro}/>
  )
}

export default Home
