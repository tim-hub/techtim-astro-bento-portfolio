import { Avatar, Flex, HStack, IconButton, Link, Switch, Text, Tooltip } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaTwitter } from 'react-icons/fa';

export interface IntroProps {
  colorMode: string
  toggleColorMode: () => void
  avatarUrl: string
  title: string
  twitterId: string
  bios?: string[]
}

export const Intro = ({toggleColorMode, avatarUrl, title, twitterId}: IntroProps) => {
  return (
    <Flex align="center" justify="center" m={[2, 3]} direction="column" gap={'1em'}>
      <Tooltip label="Tech Tim" aria-label='A tooltip'>
        <Avatar size='xl' name='Tech Tim' colorScheme='twitter' src={avatarUrl}/>
      </Tooltip>

      <Text>
        {title}
      </Text>
      <Text>
        learn, share and grow.
      </Text>


      <Flex>
        <HStack>
          <NextLink href={`https://twitter.com/@${twitterId}`} passHref>
            <Link target="_blank" rel="noopener">
              <IconButton colorScheme='twitter' aria-label='twitter' icon={<FaTwitter/>}>
                Twitter
              </IconButton>
            </Link>
          </NextLink>
        </HStack>
      </Flex>


      <Flex align="center" justify="center" direction="column">
        <Switch onChange={toggleColorMode} size="lg"/>
      </Flex>
    </Flex>
  )
}
