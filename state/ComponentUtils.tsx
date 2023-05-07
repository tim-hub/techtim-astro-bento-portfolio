import { FaDev, FaGithub, FaMastodon, FaMediumM, FaReadme, FaStackOverflow, FaTwitter } from 'react-icons/fa';

export const getIcon = (icon: string): React.ReactElement => {
  switch (icon) {
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
      return <FaTwitter/>
    default:
      return <FaDev/>
  }
}