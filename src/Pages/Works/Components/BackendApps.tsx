import { Grid } from '@mui/material'
import React from 'react'
import { Work } from './Work'
import ManimCsWebPreview from '../Assets/ManimCSWebPreview.png'

export function BackendApps() {
  return (
    <>
        <Grid item xs={6}><Work img={ManimCsWebPreview} title='Manim CS Web Demo' description='Web interfaced demonstration of the manim-cs animation library for python: https://github.com/CadenScharpf/manim-cs' containerStyle={{  }} /></Grid>
    </>
  )
}

