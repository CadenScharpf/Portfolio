import { Box, Grid } from '@mui/material'
import React from 'react'
import { Work } from './Work'
import ManimCsWebPreview from '../Assets/ManimCSWebPreview.png'
import ManimCsPreview from '../Assets/ManimCsPreview.png'
import PortfolioPreview from '../Assets/PortfolioPreview.png'
import LgsDel from '../Assets/LgsDeliveryEngine.png'
import { AnimatePresence, motion } from 'framer-motion'
import { TRANSITION_DURATION } from '../../PageStyle'

interface App {
  img: string,
  title: string,
  description: string,
  site?: string,
  github?: string,
}

const APPS = [
  {img: ManimCsWebPreview, title: 'Manim CS Web Demo', description: 'Web interfaced demonstration of the manim-cs animation library for python(github.com/CadenScharpf/manim-cs)', site: 'https://manimcs-demo.cadenscharpf.tech/', github: 'https://github.com/CadenScharpf/manim-cs-web'},
  {img: PortfolioPreview, title: 'Portfolio', description: 'Personal developer portfolio website developed using Typescript and ReactJS', site: 'https://manimcs-demo.cadenscharpf.tech/', github: 'https://github.com/CadenScharpf/manim-cs-web'},
  {img: LgsDel, title: 'LGS Delivery Engine', description: 'QR Scanner/Logistics Tracking Software used by Local Grown Salads LLC delivery team members to manage active deliveries. Developed using React Native with the Expo CLI.', site: 'https://manimcs-demo.cadenscharpf.tech/', github: 'https://github.com/CadenScharpf/manim-cs-web'},

]
const PHASE_DURATION = .25; //!< time between triggerings of each phase
const PHASE_ANIMATION_DURATION = .5; //!< time it takes for each phase to animate

const getPhaseDelay = (phase: number): number => {
  return phase * PHASE_DURATION ;
};

const variants = {
  initial: {
    opacity: 0,

  },
  animate: {

  },
  exit: {

  }
}

export function WebApplications() {
  return (
    <>
      {APPS.map((app: App, index: number) => {
        return(<Grid component={motion.div} key={app.title} initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: getPhaseDelay(index), duration: PHASE_ANIMATION_DURATION}}} exit={{opacity: 0}} item xs={12} sm={12} md={6} lg={4} xl={4} ><Work img={app.img} title={app.title} description={app.description} site={app.site} github={app.github} /></Grid>)
      })}
    </>
  )
}

