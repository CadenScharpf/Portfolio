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
        <Grid item xs={6}><Work img={ManimCsWebPreview} title='Manim CS Web Demo' description='sdfsadf ds fa s dsf sad s sf asd fsdaf sdfsd sdf sdf s dfasdf dsf asdf sdf sad fsdf sda fsdf sdf  sdf ds fasd sdf fs df sdfs d sdfs adfsd fasd fsadf sdf sdf sdf sdf sdf sadf sadfsdaf sd sd sd fs dsfsad sadf dsfsd fsd sdf sd fsdf sdfsd sd sdfsdf sad fsda  sd sd fa sdf asdfdf asdf sadfasdfsdaf sdf a sdfas dfasd fasdf sadf asdfa sdfas defasd fsa dsad fwsafddd asd fsdf asdf sadfsa sdf f dsf sd fasd fsadf asd fsad fasd fsda  sf as fsd' containerStyle={{  }} /></Grid>
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
