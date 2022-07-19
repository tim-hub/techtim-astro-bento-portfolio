import NextLink from 'next/link';
import { IconButton, Link } from '@chakra-ui/react';
import { FaGithub, FaStackOverflow, FaTwitter } from 'react-icons/fa';

const socialMedium = {
  twitter: {
    icon: FaTwitter,
    url: 'https://twitter.com/@',
  },
  stackOverflow: {
    icon: FaStackOverflow,
    url: 'https://twitter.com/@',
  },
  github: {
    icon: FaGithub,
    url: 'https://twitter.com/@',
  },
}

export interface SocialIconProps {
  id: string
  socialMedium: keyof typeof socialMedium
}

// todo fix this
export const SocialIcon = ({id, socialMedium}: SocialIconProps) => {
  return (
    <NextLink href={`https://twitter.com/@${id}`} passHref>
      <Link target="_blank" rel="noopener">
        <IconButton colorScheme='twitter' aria-label='twitter'
                    // icon={socialMedium[socialMedium].icon}
        >
          Twitter
        </IconButton>
      </Link>
    </NextLink>
  )
}
