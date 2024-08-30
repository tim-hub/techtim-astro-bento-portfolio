import { createContext } from 'react';
import { INTRO } from './constants';

export type IntroContextResponseType = {
  data: IntroContextResponseDataType
  meta?: any
  error: {
    status: number,
    name: string,
    message: string
  }
}

export type IntroContextResponseDataType = {
  id: number
  attributes: IntroContextType
}

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



const SiteContext = createContext({intro: INTRO});

export default SiteContext;
