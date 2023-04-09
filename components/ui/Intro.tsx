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
import {
  FaCheckCircle,
  FaDev,
  FaGithub,
  FaMastodon,
  FaMediumM,
  FaReadme,
  FaStackOverflow,
  FaTwitter
} from 'react-icons/fa';
import { IIntroContext } from '../../state/SiteContext';
import CustomLink from './CustomLink';

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
    mastodonId,
    bios,
    stackOverflowId,
    githubId,
    devToId,
    mediumId,
    intro,
    dx
  }: IIntroProps) => {
  return (
    <Flex align="center" justify="center" m={[2, 3]} direction="column" gap={'1em'}>
      <Tooltip label="Tech Tim" aria-label='A tooltip'>
        <Avatar size='xl' name='Tech Tim' colorScheme='twitter' src={avatarUrl}/>
      </Tooltip>

      <Text>
        <Link rel="noopener" href={"/"} isExternal={false}>{title}
        </Link>
      </Text>

      <List spacing={3} textAlign={'center'}>
        <ListItem>
          <ListIcon as={FaCheckCircle} color='green.500'/>
          {intro}
        </ListItem>
      </List>

      <Accordion allowToggle defaultIndex={[0]} width={'100%'} allowMultiple>
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
              bios?.map(
                (bio) => (
                  <Text key={bio}>
                    {bio}
                  </Text>
                )
              )
            }
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                What is DX? DXI(mprovement)?
              </Box>
              <AccordionIcon/>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {
              dx?.map(
                (d) => (
                  <Text key={d}>
                    {d}
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
            stackOverflowId && <CustomLink href={`https://stackoverflow.com/users/${stackOverflowId}`}>
              <Tooltip hasArrow label='StackOverflow'>
                <IconButton size="lg" colorScheme='orange' aria-label='StackOverflow' icon={<FaStackOverflow/>}>
                  StackOverflow
                </IconButton>
              </Tooltip>
            </CustomLink>
          }
          {
            githubId && <CustomLink href={`https://github.com/${githubId}`}>
              <Tooltip hasArrow label='Github'>
                <IconButton size="lg" colorScheme='gray' aria-label='github' icon={<FaGithub/>}>
                  Github
                </IconButton>
              </Tooltip>
            </CustomLink>
          }
        </HStack>
      </Flex>
      <Flex>
        <HStack>
          {
            mastodonId && <CustomLink href={`https://awscommunity.social/${mastodonId}`}>
              <Tooltip hasArrow label='AWS Community Mastodon'>
                <IconButton size="lg" colorScheme='purple' aria-label='mastodon' icon={<FaMastodon/>}>
                  Mastodon
                </IconButton>
              </Tooltip>
            </CustomLink>
          }
          {
            twitterId && <CustomLink href={`https://twitter.com/${twitterId}`}>
              <Tooltip hasArrow label='Twitter'>
                <IconButton size="lg" colorScheme='twitter' aria-label='twitter' icon={<FaTwitter/>}>
                  Twitter
                </IconButton>
              </Tooltip>
            </CustomLink>
          }
          {
            twitterId && <CustomLink href={`https://threadreaderapp.com/user/${twitterId}`}>
              <Tooltip hasArrow label='Thread Reader'>
                <IconButton size="lg" colorScheme={'yellow'} aria-label='thread-reader' icon={<FaReadme/>}>
                  Thread Reader
                </IconButton>
              </Tooltip>
            </CustomLink>
          }
        </HStack>
      </Flex>
      <Flex>
        <HStack>
          {
            devToId && <CustomLink href={`https://dev.to/${devToId}`}>
              <Tooltip hasArrow label='Dev.to'>
                <IconButton size="lg" colorScheme={'blue'} aria-label='dev.to' icon={<FaDev/>}>
                  Dev.to
                </IconButton>
              </Tooltip>
            </CustomLink>
          }
          {
            mediumId && <CustomLink href={`https://medium.com/@${mediumId}`}>
              <Tooltip hasArrow label='Medium'>
                <IconButton size="lg" colorScheme={'teal'} aria-label='medium' icon={<FaMediumM/>}>
                  Medium
                </IconButton>
              </Tooltip>
            </CustomLink>
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
