import {
  FaDev,
  FaGithub,
  FaMastodon,
  FaMediumM,
  FaReadme,
  FaStackOverflow,
  FaTwitterSquare,
  FaYoutube,
} from 'react-icons/fa';

export const getIcon = (siteNameOrSiteFavicon: string): React.ReactElement => {
  switch (siteNameOrSiteFavicon) {
    case 'Dev':
      return <FaDev/>
    case 'Github':
      return <FaGithub/>
    case 'Mastodon':
      return <FaMastodon/>
    case 'Medium':
      return <FaMediumM/>
    case 'ThreadReader':
      return <FaReadme/>
    case 'StackOverflow':
      return <FaStackOverflow/>
    case 'Twitter':
      return <FaTwitterSquare/>
    case 'Youtube':
      return <FaYoutube/>
    case 'Antioch Tech':
      return <img src={'https://antioch.tech/favicon.ico'}></img>
    default:
      return <img src={siteNameOrSiteFavicon}></img>
  }
}