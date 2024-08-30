import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/bue221',
  linkedin: 'https://www.linkedin.com/in/bue221/',
  mail: 'mailto:camiloplaza3@gmail.com',
  instagram: 'https://www.instagram.com/caj_ink/',
  medium: 'https://ladvace.medium.com/',
  discord: 'https://discordapp.com/users/163300027618295808',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Computer Science',
    institution: 'Universidad Central',
    link: 'https://www.ucentral.edu.co/',
    date: '2019 - 2027',
  },
  {
    title: '...',
    institution: 'Platzi',
    link: 'https://platzi.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Udemy',
    link: 'https://www.udemy.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@midulive',
    date: '2018 - 2022',
  },
  {
    title: 'Tattoo Artist',
    institution: 'Tattoo Academy',
    link: 'https://www.instagram.com/tattoodcacademy/',
    date: '2024 - 2025',
  },
]

export const EXPERIENCE = [
  {
    company: 'Straico',
    location: 'Bogotá D C, Colombia',
    position: 'Software Engineer',
    start: '2021',
    link: 'https://straico.com/',
    end: 'Current',
    tasks: [
      'Integration IA services with react and tailwind css',
      'Development and build of DB with mongoDB',
    ],
  },
  {
    company: 'Spot2',
    location: 'Mexico City, Mexico',
    position: 'Software Engineer',
    link: 'https://spot2.mx/',
    start: '2021',
    end: 'Current',
    tasks: [
      'Development of the Spot2 platform with the use of React, Redux, and Material UI',
      'Development map with the use of Google Maps API',
      'Development internal platform with the use of React, Redux, and Material UI',
      'Testing and debugging',
    ],
  },
  {
    company: 'Imaginamos',
    link: 'https://imaginamos.com/',
    location: 'Bogotá D C, Colombia',
    position: 'Frontend developer',
    start: '2021',
    end: '2021',
    tasks: [
      'Development of the Imaginamos platform with the use of React, Redux, and Material UI',
      'Work in ETB project with the use of React, Redux, and Material UI',
    ],
  },
  {
    company: 'INETUM',
    location: 'Bogotá D C, Colombia',
    position: 'Frontend developer',
    start: '2021',
    link: 'https://www.inetum.com/es',
    end: '2021',
    tasks: [
      'Support in the QA area and bug review',
      'Use of SCRUM methodology',
      'Claro projects with the use of frameworks and libraries such as react and angular',
      'Use of redux toolkit as aproposal which allowed a shorter development time when using this tool',
    ],
  },
  {
    company: 'S I G',
    location: 'Bogotá D C, Colombia',
    position: 'Software developer',
    start: '2021',
    end: '2021',
    tasks: [
      'Development of a dashboard with react admin and chartjs for managing and entering information',
    ],
  },
  {
    company: 'BOOKII',
    location: 'Bogotá D C, Colombia',
    position: 'Software developer',
    start: '2019',
    end: '2021',
    tasks: [
      'Productive collaborationwiththebackendteamforthecreationofthe conversationalclubs',
      'Effective coding of conversational clubs following design guide lines and using the Redux statemanager',
      'Creation of the Bookii page in Spanish and change of texts in cms',
      'Generation of static posts using Gatsby and the Contentful cms for the Bookii blog',
    ],
  },
]
