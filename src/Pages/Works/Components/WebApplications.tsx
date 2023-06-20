import { Box, Grid } from '@mui/material'
import React from 'react'
import { Work } from './Work'
import ManimCsWebPreview from '../Assets/ManimCSWebPreview.png'
import ManimCsPreview from '../Assets/ManimCsPreview.png'
import PortfolioPreview from '../Assets/PortfolioPreview.png'

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
  {img: ManimCsWebPreview, title: 'Manim CS', description: 'An animation library for explanatory Computer Science videos', site: 'https://pypi.org/project/manimcs/', github: 'https://github.com/CadenScharpf/manim-cs'},
  {img: ManimCsWebPreview, title: 'Manim CS', description: 'An animation library for explanatory Computer Science videos', site: 'https://pypi.org/project/manimcs/', github: 'https://github.com/CadenScharpf/manim-cs'},
  {img: ManimCsWebPreview, title: 'Manim CS', description: 'An animation library for explanatory Computer Science videos', site: 'https://pypi.org/project/manimcs/', github: 'https://github.com/CadenScharpf/manim-cs'},
  {img: ManimCsWebPreview, title: 'Manim CS', description: 'An animation library for explanatory Computer Science videos', site: 'https://pypi.org/project/manimcs/', github: 'https://github.com/CadenScharpf/manim-cs'},
  {img: ManimCsWebPreview, title: 'Manim CS', description: 'An animation library for explanatory Computer Science videos', site: 'https://pypi.org/project/manimcs/', github: 'https://github.com/CadenScharpf/manim-cs'},
  {img: ManimCsWebPreview, title: 'Manim CS', description: 'An animation library for explanatory Computer Science videos', site: 'https://pypi.org/project/manimcs/', github: 'https://github.com/CadenScharpf/manim-cs'},

]

export function WebApplications() {
  return (
    <>
      {APPS.map((app: App) => {
        return(<Grid key={app.title} item xs={12} sm={12} md={6} lg={4} xl={4} ><Work img={app.img} title={app.title} description={app.description} site={app.site} github={app.github} /></Grid>)
      })}
    </>
  )
}

