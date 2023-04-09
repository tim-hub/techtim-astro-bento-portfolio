import { Intro as IntroUI } from '../ui/Intro'
import { useColorMode } from '@chakra-ui/react'
import { useContext, Suspense } from 'react'
import SiteContext from '../../state/SiteContext'


const Intro = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  const {intro} = useContext(SiteContext);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <IntroUI {...{...intro, colorMode, toggleColorMode}} />
    </Suspense>
  )
}

export default Intro
