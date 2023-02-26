import { createContext } from 'react';
import { SITE_NAME } from '../utils/configs';

export interface IIntroContext {
  avatarUrl: string
  title: string
  twitterId: string
  mastodonId: string
  stackOverflowId?: string
  githubId?: string
  devToId?: string
  mediumId?: string
  bios?: string[]
}

export const INTRO: IIntroContext = {
  avatarUrl: '/techtim42.png',
  title: SITE_NAME,
  twitterId: 'TechTim42',
  mastodonId: 'techtim',
  stackOverflowId: '5249708/tim',
  githubId: 'tim-hub',
  devToId: 'timhub',
  mediumId: 'TechTim42',
  bios: [
    'Learn, Share and Grow ❤️',
    '💻 Software Engineer | AWS Professional | Open Source Lover ',
    '☘️ Passionate about Dev Experience Improvement (DEI)️',
    '☁️ AWS Community Builder'
  ]
}
const SiteContext = createContext({intro: INTRO});

export default SiteContext;
