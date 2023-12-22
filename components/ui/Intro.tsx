'use client'
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
  Tooltip, useColorMode
} from '@chakra-ui/react';
import {
  FaCheckCircle,
} from 'react-icons/fa';
import { IntroContextType } from '../../state/SiteContext';
import CustomLink from './CustomLink';
import { getIcon } from '../../state/ComponentUtils';
import { SITE_NAME } from '../../utils/configs';

export interface IIntroProps extends IntroContextType {
}

export const Intro = (
  {
    avatarUrl,
    title,
    intro,
    sections,
    socials,
  }: IIntroProps) => {

  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Flex align="center" justify="center" m={[2, 3]} direction="column" gap={'1em'}>
      <Tooltip label={SITE_NAME} aria-label='A tooltip'>
        <Avatar size='xl' name='Tech Tim' colorScheme='twitter' src={avatarUrl}/>
      </Tooltip>

      <Text>
        <Link rel="noopener" href={"/"} isExternal={false}>{title}
        </Link>
      </Text>

      <List spacing={3} textAlign={'center'}>
        <ListItem>
          <ListIcon as={FaCheckCircle as any} color='green.500'/>
          {intro}
        </ListItem>
      </List>

      <Accordion defaultIndex={[0]} width={'100%'} allowMultiple>
        {
          sections?.map(
            (section) => (
              <AccordionItem key={section.header}>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      {section.header}
                    </Box>
                    <AccordionIcon/>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {
                    section?.items?.map(
                      (item) => (
                        <Text key={item}>
                          {item}
                        </Text>
                      )
                    )
                  }
                </AccordionPanel>
              </AccordionItem>
            )
          )
        }
      </Accordion>


      {
        socials?.map((_, index) => {
          return <Flex key={index}> <HStack>
            {
              (socials && socials[index].length) && socials[index].map(
                (social) => (
                  <CustomLink href={social.url} key={social.label}>
                    <Tooltip hasArrow label={social.label}>
                      <IconButton size="lg" colorScheme={social?.colorSchema ?? 'gray'} aria-label={social.label}
                                  icon={getIcon(social.label)}>
                        {social.label}
                      </IconButton>
                    </Tooltip>
                  </CustomLink>
                )
              )
            }
          </HStack> </Flex>
        })
      }
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
