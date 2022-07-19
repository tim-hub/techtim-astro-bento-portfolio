import {
  Accordion,
  AccordionButton, AccordionIcon,
  AccordionItem, AccordionPanel,
  Avatar, Box,
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
import { FaCheckCircle, FaTwitter } from 'react-icons/fa';

export interface IntroProps {
  colorMode: string
  toggleColorMode: () => void
  avatarUrl: string
  title: string
  twitterId: string
  bios?: string[]
}

export const Intro = ({toggleColorMode, avatarUrl, title, twitterId, bios}: IntroProps) => {
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
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {
              bios?.slice(1).map(
                (bio)=> (
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
