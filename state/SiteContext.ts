import { createContext } from 'react';
import { SITE_NAME } from '../utils/configs';

export interface IIntroContext {
  avatarUrl: string
  title: string
  twitterId: string
  stackOverflowId?: string
  githubId?: string
  devToId?: string
  bios?: string[]
}

export const INTRO:IIntroContext = {
  avatarUrl: '/techtim42.png',
  title: SITE_NAME,
  twitterId: 'TechTim42',
  stackOverflowId: '5249708/tim',
  githubId: 'tim-hub',
  devToId: 'timhub',
  bios: [
    'Learn, Share and Grow ❤️',
    '💻 Software Engineer | AWS Professional | Open Source Lover ',
    '☘️ Passionate about Dev Experience Improvement (DEI)️'
  ]
}
const SiteContext = createContext({intro: INTRO});

export default SiteContext;
