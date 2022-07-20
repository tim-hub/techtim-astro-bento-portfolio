import { Intro as IntroUI } from '../ui/Intro'
import { useColorMode } from '@chakra-ui/react'
import { useContext } from 'react'
import SiteContext from '../../state/SiteContext'


const Intro = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  const {intro} = useContext(SiteContext);
  return (
    <IntroUI {...{...intro, colorMode, toggleColorMode}} />
  )
}

export default Intro
