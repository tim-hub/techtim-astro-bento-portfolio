import { createContext } from 'react';
import { SITE_NAME } from '../utils/configs';

export type IntroContextType = {
  avatarUrl: string
  title: string
  intro: string
  socials?: Array<Array<{
    label: string
    url: string
    colorSchema: string
    icon?: string
  }>>
  sections?: {
    header: string
    order: number
    items: string[]
  }[]
}



export const INTRO: IntroContextType = {
  avatarUrl: '/techtim42.png',
  title: SITE_NAME,
  intro: 'Learn, Share and Grow ❤️',
  socials: [
    [
      // 1st line, stackoverflow and gihub
      {
        label: 'StackOverflow',
        url: 'https://stackoverflow.com/users/5249708/tim',
        colorSchema: 'orange',
      },
      {
        label: 'Github',
        url: 'https://github.com/tim-hub',
        colorSchema: 'gray',
      }
    ],
    [
      // 2nd line, mastodon, twitter and thread reader
      {
        label: 'Mastodon',
        url: 'https://mastodon.social/@techtim',
        colorSchema: 'purple'
      },
      {
        label: 'Twitter',
        url: 'https://twitter.com/TechTim42',
        colorSchema: 'twitter',
      },
      {
        label: 'ThreadReader',
        url: 'https://threadreaderapp.com/user/TechTim42',
        colorSchema: 'yellow',
      }
    ],
    [
      // 3rd line, dev.to, medium
      {
        label: 'Dev',
        url: 'https://dev.to/timhub',
        colorSchema: 'blue',
      },
      {
        label: 'Medium',
        url: 'https://medium.com/@TechTim42',
        colorSchema: 'teal',
      }
    ]
  ],
  sections: [
    {
      header: 'Know more about me',
      order: 0,
      items: [
        '💻 Software Engineer | AWS Professional | Open Source Lover ',
        '☘️ Passionate about Dev Experience(DX) Improvement',
        '☁️ AWS Community Builder'
      ]
    },
    {
      header: 'What is DX',
      order: 2,
      items: [
        '👨‍💻 DX stands for Dev Experience, it is a User Experience from a dev\'s view, it is defined by the tools, processes, and software that a developer uses when interacting with a product or system while in the process of production of another one. ',
        '🔨 UX was out by Donald Norman in mid 1990s, and becoming popular in mid 2010s with the rise of mobile devices. However DX was not out until late 2010s, and it is still not popular. ',
        '🤔 But from my last 10 years dev experience, I think DX is more important than UX, because it is more related to the core of the product, especially in the age of Software as a Service. ',
        '⬆️ DXI is the process and practice of improving DX, and it is a very important part of the product development process, which is the area I am passionate about. ',
      ]
    },
    {
      header: 'Where to find me in my Spare Time',
      order: 1,
      items: [
        '🎮 I am a big fan of Board Games, 7 Wonders is my favourite, want to try DnD sometime',
        '📚 Reading and Writing, I like East Asian history, I like to read both fiction and non-fiction books, and I like to write about my thoughts and experience for life and work',
        '🎸 Side Projects, and Making Contribution to Open Source community',
        ]
    },

  ]
}
const SiteContext = createContext({intro: INTRO});

export default SiteContext;
