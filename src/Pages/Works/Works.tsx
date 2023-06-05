import React from 'react'
import { motion } from 'framer-motion'
import { PAGE_STYLE } from '../PageStyle'
import { Nav } from '../../Components'
import { ContentWindow } from '../../Components/ContentWindow'
import { Work } from './Components'
import ManimCsWebPreview from './Assets/ManimCSWebPreview.png'
import { Box, Grid } from '@mui/material'

const styles = {
  page: {
    ...PAGE_STYLE,
    backgroundColor: 'white',
  }
}

export function Works() {
  return (
    <ContentWindow style={{ backgroundImage: 'linear-gradient(to right, #8360c3, #2ebf91)' }}>
      <Grid container spacing={2} style={{ maxHeight: '100%', overflow: 'auto', padding: '1rem' }} >
        <Grid item xs={6}><Work img={ManimCsWebPreview} title='Manim CS Web Demo' description='Web interfaced demonstration of the manim-cs animation library for python: https://github.com/CadenScharpf/manim-cs' containerStyle={{  }} /></Grid>
        <Grid item xs={6}><Work img={ManimCsWebPreview} title='' description='' containerStyle={{  }} /></Grid>
        <Grid item xs={6}><Work img={ManimCsWebPreview} title='' description='' containerStyle={{  }} /></Grid>
        <Grid item xs={6}><Work img={ManimCsWebPreview} title='' description='' containerStyle={{  }} /></Grid>
        <Grid item xs={6}><Work img={ManimCsWebPreview} title='' description='' containerStyle={{  }} /></Grid>
        <Grid item xs={6}><Work img={ManimCsWebPreview} title='' description='' containerStyle={{  }} /></Grid>
        <Grid item xs={6}><Work img={ManimCsWebPreview} title='' description='' containerStyle={{  }} /></Grid>
      </Grid>
    </ContentWindow>
  )
}
