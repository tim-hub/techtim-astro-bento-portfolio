import { createContext } from 'react';
import { SITE_NAME } from '../utils/configs';

export interface IIntroContext {
  avatarUrl: string
  title: string
  twitterId: string
  mastodonId: string
  intro: string
  stackOverflowId?: string
  githubId?: string
  devToId?: string
  mediumId?: string
  bios?: string[]
  dx?: string[]
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
    '💻 Software Engineer | AWS Professional | Open Source Lover ',
    '☘️ Passionate about Dev Experience Improvement (DXI)️',
    '☁️ AWS Community Builder'
  ],
  intro: 'Learn, Share and Grow ❤️',
  dx: [
    '👨‍💻 DX is Dev Experience, it is a User Experience from a dev\'s view, it is defined by the tools, processes, and software that a developer uses when interacting with a product or system while in the process of production of another one. ',
    '🔨 UX was out by Donald Norman in mid 1990s, and becoming popular in mid 2010s with the rise of mobile devices. However DX was not out until late 2010s, and it is still not popular. ',
    '🤔 But from my last 10 years dev experience, I think DX is more important than UX, because it is more related to the core of the product, especially in the age of Software as a Service. ',
    '⬆️ DXI is the process and practice of improving DX, and it is a very important part of the product development process, which is the area I am passionate about. ',
  ]
}
const SiteContext = createContext({intro: INTRO});

export default SiteContext;
