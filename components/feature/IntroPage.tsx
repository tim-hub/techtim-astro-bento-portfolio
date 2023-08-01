import {  IntroContextType } from '../../state/SiteContext';
import { Intro as IntroUI } from '../ui/Intro';
import { INTRO } from '../../state/constants';


const IntroPage = ({intro}: {intro?: IntroContextType}) => {
  const introData = intro ? intro : INTRO
  return (
    <IntroUI {...introData} />
  )
}

export default IntroPage