import type { NextPage } from 'next'
import NextLink from 'next/link'
import { Button, Flex, Heading, HStack, useColorMode, Box, Avatar, Link, Tooltip, IconButton, Switch, Text } from '@chakra-ui/react'
import { FaStackOverflow, FaTwitter } from 'react-icons/fa'

const Home: NextPage = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Flex align="center" justify="center" m={[2, 3]} direction="column" gap={'1em'}>
      {/*<Flex paddingTop={"1em"} direction="row" justify="center">*/}
      {/*  <Box>Tech Tim</Box>*/}
      {/*  <Box >@TechTim42</Box>*/}
      {/*</Flex>*/}
      <Tooltip label="Tech Tim" aria-label='A tooltip'>
        <Avatar size='xl' name='Tech Tim'/>
      </Tooltip>

      <Text>
        Tech Tim (@TechTim42)
      </Text>
      <Text>
        learn, share and grow.
      </Text>


      <Flex>
        <HStack>
          <NextLink href="https://twitter.com/TechTim42" passHref>
            <Link  target="_blank" rel="noopener">
              <IconButton colorScheme='twitter' aria-label='twitter' icon={<FaTwitter/>}>
                Twitter
              </IconButton>
            </Link>
          </NextLink>
        </HStack>
      </Flex>


      <Flex align="center" justify="center" direction="column">
        {/*<Tooltip label={`Switch ${colorMode}`} aria-label='A tooltip'>*/}
          <Switch onChange={toggleColorMode} size="lg" />
        {/*</Tooltip>*/}
      </Flex>
    </Flex>

  )
}

export default Home
