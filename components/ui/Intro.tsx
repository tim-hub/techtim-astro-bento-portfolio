import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  List,
  ListIcon,
  ListItem,
  Switch,
  Text,
  Tooltip
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaBlogger, FaCheckCircle, FaGithub, FaStackOverflow, FaTwitter } from 'react-icons/fa';
import { IIntroContext } from '../../state/SiteContext';

export interface IIntroProps extends IIntroContext {
  colorMode: string
  toggleColorMode: () => void
}

export const Intro = (
  {
    toggleColorMode,
    avatarUrl,
    title,
    twitterId,
    bios,
    stackOverflowId,
    githubId,
    colorMode
  }: IIntroProps) => {
  return (
    <Flex align="center" justify="center" m={[2, 3]} direction="column" gap={'1em'}>
      <Tooltip label="Tech Tim" aria-label='A tooltip'>
        <Avatar size='xl' name='Tech Tim' colorScheme='twitter' src={avatarUrl}/>
      </Tooltip>

      <Text>
        <NextLink href={`/`} passHref>
          <Link rel="noopener">{title}
          </Link>
        </NextLink>
      </Text>

      <List spacing={3} textAlign={'center'}>
        <ListItem>
          <ListIcon as={FaCheckCircle} color='green.500'/>
          {bios ? bios[0] : ''}
        </ListItem>
      </List>

      <Accordion allowToggle defaultIndex={[0]} width={'100%'}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                Know more about me
              </Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {
              bios?.slice(1).map(
                (bio) => (
                  <Text key={bio}>
                    {bio}
                  </Text>
                )
              )
            }
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Flex>
        <HStack>
          {
            stackOverflowId && <NextLink href={`https://stackoverflow.com/users/${stackOverflowId}`} passHref>
              <Link target="_blank" rel="noopener">
                <Tooltip hasArrow label='StackOverflow'>
                  <IconButton size="lg" colorScheme='orange' aria-label='StackOverflow' icon={<FaStackOverflow/>}>
                    StackOverflow
                  </IconButton>
                </Tooltip>
              </Link>
            </NextLink>
          }
          {
            githubId && <NextLink href={`https://github.com/${githubId}`} passHref>
              <Link target="_blank" rel="noopener">
                <Tooltip hasArrow label='Github'>
                  <IconButton size="lg" aria-label='github' icon={<FaGithub/>}>
                    Github
                  </IconButton>
                </Tooltip>
              </Link>
            </NextLink>
          }

          {
            twitterId && <NextLink href={`https://twitter.com/@${twitterId}`} passHref>
              <Link target="_blank" rel="noopener">
                <Tooltip hasArrow label='Twitter'>
                  <IconButton size="lg" colorScheme='twitter' aria-label='twitter' icon={<FaTwitter/>}>
                    Twitter
                  </IconButton>
                </Tooltip>
              </Link>
            </NextLink>
          }

          {
            twitterId && <NextLink href={`https://threadreaderapp.com/user/${twitterId}`} passHref>
              <Link target="_blank" rel="noopener">
                <Tooltip hasArrow label='Thread Reader'>
                  <IconButton size="lg" colorScheme={'teal'} aria-label='thread-reader' icon={<FaBlogger/>}>
                    Thread Reader
                  </IconButton>
                </Tooltip>
              </Link>
            </NextLink>
          }
        </HStack>
      </Flex>


      <Flex align="center" justify="center" direction="column">
        <Tooltip hasArrow label='Dark/Light Switch'>
          <Box>
            <Switch onChange={toggleColorMode} size="lg"/>
          </Box>
        </Tooltip>
      </Flex>
    </Flex>
  )
}
