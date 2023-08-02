import {  IntroContextType } from '../../state/SiteContext';
import { Intro as IntroUI } from '../ui/Intro';
import { INTRO } from '../../state/constants';


const IntroPage = ({intro}: {intro: IntroContextType}) => {
  return (
    <IntroUI {...intro} />
  )
}

export default IntroPage