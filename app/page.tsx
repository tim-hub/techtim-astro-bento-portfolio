import { SITE_URL } from '../utils/configs';

import { Metadata } from 'next'
import IntroPage from '../components/feature/IntroPage';

import { httpRequest, promisedHTTPsRequest } from '../utils/utils';
import { INTRO } from '../state/constants';
import { IntroContextType } from '../state/SiteContext';


export const metadata: Metadata = {
  title: 'Tech Tim (@TechTim42) - Learn, Share and Grow',
  alternates: {
    canonical: SITE_URL,
  },
  description: "Learn, Share and Grow ❤️ -- Software Engineer | AWS Professional | Open Source Lover  --☘️ Be more productive, Better in communicating, Contribute more to community.",
}

export const revalidate: number = 604800000;


async function getIntro(): Promise<{ attributes: IntroContextType }> {
  const url = process?.env?.CMS_URL || 'http://localhost:1337'

  const endpointPath = `/api/intro-contexts/1?populate=socials,sections`;
  const token = process.env.CMS_API_TOKEN

  if (!token) {
    console.error('CMS_API_TOKEN is not set')
    throw new Error('CMS_API_TOKEN is not set')
  }

  if (url.startsWith('http://')) {
    // go with fetch
    try {
      const resp = await httpRequest(url, endpointPath, token)
      return resp.data
    } catch (e) {
      console.error('fall back to hard coded data', e)
      return {attributes: INTRO}
    }

  } else {
    // go with https request
    const resp = await promisedHTTPsRequest(url, endpointPath, token)
    if (resp.error) {
      console.error('fall back to hard coded data', resp.error)
      return {attributes: INTRO}
    }
    return resp.data
  }

}


const Home = async () => {
  const data = await getIntro();
  const intro = (await getIntro()).attributes
  // console.debug(JSON.stringify(intro))
  return (
    <IntroPage intro={intro}/>
  )
}

export default Home
