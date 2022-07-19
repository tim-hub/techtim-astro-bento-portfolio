import { Intro as IntroUI, IntroProps } from '../ui/Intro';
import { useColorMode } from '@chakra-ui/react';

const data: Omit<IntroProps, 'colorMode' | 'toggleColorMode'> = {
  avatarUrl: '/techtim42.png',
  title: 'Tech Tim',
  twitterId: 'TechTim42'
}

const Intro = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <IntroUI  {...{...data, colorMode, toggleColorMode}} />
  )
}

export default Intro
