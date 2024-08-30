import https, { RequestOptions } from 'https';
import { SITE_NAME } from './configs';
import { IntroContextResponseType, IntroContextType } from '../state/SiteContext';

export const convertUrlToHostName = (url: string) => {
  // check start with http or https
  if (!url.startsWith('http')) {
    return url;
  }
  const urlObj = new URL(url);
  return urlObj.hostname;
}

export const promisedHTTPsRequest = (url: string, endpointPath: string, token: string): Promise<IntroContextResponseType> => {

  const options = {
    protocol: 'https:',
    hostname: convertUrlToHostName(url),
    port: 443,
    path: endpointPath,
    method: 'GET',
    secureProtocol: "TLSv1_2_method",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  return new Promise((resolve, reject) => {
    let data = '';
    let req = https.request(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(JSON.parse(data));
      })
    });
    req.on('error', (e) => {
      console.error(e);
      reject({data: null, error: e});
    });
    req.end();
  });
}

export const httpRequest = async (url: string, endpointPath: string, token: string): Promise<IntroContextResponseType> => {
  const res = await fetch(
    `${url}${endpointPath}`,
    {
      // next: { revalidate: 1000*60*60*24*7 }, // revalidating data every week // with this it is incremetal static regeneration
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        'Host': SITE_NAME,
      }
    }
  )

  if (res.status < 200 || res.status > 300) {
    console.error('Request failed', res.status, res.statusText)
    throw new Error(`request failed at code ${res.status}`)
  }

  return res.json()
}