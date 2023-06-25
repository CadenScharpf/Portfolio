import { Grid } from '@mui/material'
import React from 'react'
import { Work } from './Work'
import ManimCsWebPreview from '../Assets/ManimCSWebPreview.png'
import ManimCsPreview from '../Assets/ManimCsPreview.png'
import { motion } from 'framer-motion'

interface App {
  img: string,
  title: string,
  description: string,
  site?: string,
  github?: string,
}

const APPS = [
  {img: ManimCsPreview, title: 'Manim CS', description: 'An animation library for explanatory Computer Science videos', site: 'https://pypi.org/project/manimcs/', github: 'https://github.com/CadenScharpf/manim-cs'},
  {img: ManimCsWebPreview, title: 'Portfolio', description: 'Personal developer portfolio website developed using Typescript and ReactJS', site: 'https://manimcs-demo.cadenscharpf.tech/', github: 'https://github.com/CadenScharpf/manim-cs-web'},
  {img: ManimCsWebPreview, title: 'Portfolio', description: 'Personal developer portfolio website developed using Typescript and ReactJS', site: 'https://manimcs-demo.cadenscharpf.tech/', github: 'https://github.com/CadenScharpf/manim-cs-web'},
  {img: ManimCsWebPreview, title: 'Portfolio', description: 'Personal developer portfolio website developed using Typescript and ReactJS', site: 'https://manimcs-demo.cadenscharpf.tech/', github: 'https://github.com/CadenScharpf/manim-cs-web'},
  {img: ManimCsWebPreview, title: 'Portfolio', description: 'Personal developer portfolio website developed using Typescript and ReactJS', site: 'https://manimcs-demo.cadenscharpf.tech/', github: 'https://github.com/CadenScharpf/manim-cs-web'},
  {img: ManimCsWebPreview, title: 'Portfolio', description: 'Personal developer portfolio website developed using Typescript and ReactJS', site: 'https://manimcs-demo.cadenscharpf.tech/', github: 'https://github.com/CadenScharpf/manim-cs-web'},
  {img: ManimCsWebPreview, title: 'Portfolio', description: 'Personal developer portfolio website developed using Typescript and ReactJS', site: 'https://manimcs-demo.cadenscharpf.tech/', github: 'https://github.com/CadenScharpf/manim-cs-web'},

]

const PHASE_DURATION = .25; //!< time between triggerings of each phase
const PHASE_ANIMATION_DURATION = .5; //!< time it takes for each phase to animate

const getPhaseDelay = (phase: number): number => {
  return phase * PHASE_DURATION ;
};

export function BackendApps() {
  return (
    <>
         {APPS.map((app: App, index) => {
        return(<Grid component={motion.div} initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: getPhaseDelay(index), duration: PHASE_ANIMATION_DURATION}}} exit={{opacity: 0}}key={app.title} item xs={12} sm={12} md={6} lg={4} xl={4} ><Work img={app.img} title={app.title} description={app.description} site={app.site} github={app.github} /></Grid>)
      })}
    </>
  )
}

