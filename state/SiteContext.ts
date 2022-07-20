import { createContext } from 'react';

export interface IIntroContext {
  avatarUrl: string
  title: string
  twitterId: string
  stackOverflowId?: string
  githubId?: string
  bios?: string[]
}

export const INTRO:IIntroContext = {
  avatarUrl: '/techtim42.png',
  title: 'Tech Tim',
  twitterId: 'TechTim42',
  stackOverflowId: '5249708/tim',
  githubId: 'tim-hub',
  bios: [
    'Learn, Share and Grow ❤️',
    '💻 Software Engineer | AWS Professional | Open Source Lover ',
    '☘️ Be more productive, Better in communicating, Contribute more to community ️'
  ]
}
const SiteContext = createContext({intro: INTRO});

export default SiteContext;
