import { Grid } from '@mui/material'
import React from 'react'
import { Work } from './Work'
import ManimCsWebPreview from '../Assets/ManimCSWebPreview.png'
import ManimCsPreview from '../Assets/ManimCsPreview.png'

interface App {
  img: string,
  title: string,
  description: string,
  site?: string,
  github?: string,
}

const APPS = [
  {img: ManimCsPreview, title: 'bManim CS1', description: 'An animation library for explanatory Computer Science videos', site: 'https://pypi.org/project/manimcs/', github: 'https://github.com/CadenScharpf/manim-cs'},
  {img: ManimCsWebPreview, title: 'bManim CS2', description: 'An animation library for explanatory Computer Science videos', site: 'https://pypi.org/project/manimcs/', github: 'https://github.com/CadenScharpf/manim-cs'},
  {img: ManimCsWebPreview, title: 'bManim CS3', description: 'An animation library for explanatory Computer Science videos', site: 'https://pypi.org/project/manimcs/', github: 'https://github.com/CadenScharpf/manim-cs'},

  {img: ManimCsWebPreview, title: 'bManim CS4', description: 'An animation library for explanatory Computer Science videos', site: 'https://pypi.org/project/manimcs/', github: 'https://github.com/CadenScharpf/manim-cs'},
  {img: ManimCsWebPreview, title: 'bManim CS5', description: 'An animation library for explanatory Computer Science videos', site: 'https://pypi.org/project/manimcs/', github: 'https://github.com/CadenScharpf/manim-cs'},
  {img: ManimCsWebPreview, title: 'bManim CS6', description: 'An animation library for explanatory Computer Science videos', site: 'https://pypi.org/project/manimcs/', github: 'https://github.com/CadenScharpf/manim-cs'},
  {img: ManimCsWebPreview, title: 'bManim CS7', description: 'An animation library for explanatory Computer Science videos', site: 'https://pypi.org/project/manimcs/', github: 'https://github.com/CadenScharpf/manim-cs'},

]

export function BackendApps() {
  return (
    <>
         {APPS.map((app: App) => {
        return(<Grid key={app.title} item xs={12} sm={12} md={6} lg={4} xl={4} ><Work img={app.img} title={app.title} description={app.description} site={app.site} github={app.github} /></Grid>)
      })}
    </>
  )
}

