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
import { Image, ImageProps } from '@chakra-ui/react'

const IconImage = ({
                     src,
                     maxWidth,
                     minWidth,
                     minHeight,
                     maxHeight
                   }: ImageProps & { src: string }) => (
  <Image src={src ?? 'https://via.placeholder.com/48'} maxHeight={maxHeight ?? '48px'} maxWidth={maxWidth ?? '48px'}
         minHeight={minHeight ?? '18px'}
         minWidth={minWidth ?? '18px'}/>
)

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
      return <IconImage src={'https://antioch.tech/favicon.ico'} alt={'Antioch Tech logo'}/>
    default:
      return <IconImage src={siteNameOrSiteFavicon} maxHeight={'48px'} maxWidth={'48px'} minHeight={'18px'}
                        minWidth={'18px'} alt={siteNameOrSiteFavicon}/>
  }
}